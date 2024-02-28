import { Tab } from "@headlessui/react";

import { TabList } from "@/components/Tabs/TabsList";
import { ProductWithMarkdown } from "@/graphql/products/types";

import { TabListElement } from "../../Tabs/Tab";
import { Markdown } from "../Markdown";
import { ProductReview } from "./ProductReview";

export type TabsProps = {
  longDescription: ProductWithMarkdown["longDescription"];
  reviews: ProductWithMarkdown["reviews"];
};

export const ProductTabs = ({ longDescription, reviews }: TabsProps) => {
  return (
    <div className="col-span-1 md:col-span-2 gap-4 flex flex-wrap">
      <Tab.Group>
        <TabList>
          <TabListElement>Description</TabListElement>
          <TabListElement disabled={!reviews.length}>Reviews</TabListElement>
        </TabList>
        <Tab.Panels className="basis-full">
          <Tab.Panel className="p-2">
            {<Markdown>{longDescription}</Markdown>}
          </Tab.Panel>
          <Tab.Panel as="ul" className="grid grid-cols-1 gap-4">
            {reviews.map((review) => (
              <ProductReview key={review.id} review={review} />
            ))}
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
