import axios, { isAxiosError } from "axios";
import { NextApiHandler } from "next";
import { z } from "zod";

type SuccessResponseData = {
  status: "success";
  data: {
    name: string;
  };
};

type ErrorResponseData = {
  status: "error";
  error: {
    message: string | string[];
    code: number;
  };
};

type ResponseData = SuccessResponseData | ErrorResponseData;

const requestBodySchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "This field is required")
    .email("Invalid email format"),
});

const handler: NextApiHandler<ResponseData> = async (req, res) => {
  // VALIDATE METHOD
  if (req.method !== "POST") {
    return res
      .status(405)
      .setHeader("Allow", "POST")
      .json({
        status: "error",
        error: {
          code: 405,
          message: "Method Not Allowed",
        },
      });
  }

  const parsedRequestBody = requestBodySchema.safeParse(req.body);

  // VALIDATE REQUEST BODY
  if (!parsedRequestBody.success) {
    const issues = parsedRequestBody.error.issues.map((issue) => issue.message);
    return res.status(400).json({
      status: "error",
      error: {
        code: 400,
        message: issues,
      },
    });
  }

  try {
    const subscribeUserResponse = await axios.post(
      `https://api.mailerlite.com/api/v2/groups/${process.env.MAILERLITE_GROUP_ID}/subscribers`,
      JSON.stringify(parsedRequestBody.data),
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-MailerLite-ApiKey": process.env.MAILERLITE_API_KEY,
        },
      },
    );
    return res.status(201).json({
      status: "success",
      data: subscribeUserResponse.data,
    });
  } catch (e) {
    if (isAxiosError(e)) {
      if (e.response) {
        return res.status(e.response.status).json({
          status: "error",
          error: {
            code: e.response.status,
            message: e.response.statusText,
          },
        });
      }
      if (e.request) {
        return res.status(503).json({
          status: "error",
          error: {
            code: 503,
            message:
              "Service Unavailable. The server is temporarily unable to handle the request. This may be due to the server being down, overloaded, or experiencing network problems.",
          },
        });
      }
    } else {
      return res.status(500).json({
        status: "error",
        error: {
          code: 500,
          message: "An unknown error occurred",
        },
      });
    }
  }
};

export default handler;
