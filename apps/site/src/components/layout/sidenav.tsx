import React from "react";
import Link from "next/link";
import routes from "@routes";
import { NavArrowRight } from "iconoir-react";
import { Collapse } from "@material-tailwind/react/dist";

function Collapsible({ category, categoryPages }) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleCollapse = () => setIsOpen((prev) => !prev);

  return (
    <ul className="mx-0.5">
      <li
        tabIndex={0}
        role="button"
        onClick={toggleCollapse}
        className="flex items-center justify-between gap-4 px-2 py-1.5 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-200"
      >
        {category}{" "}
        <NavArrowRight
          className={`h-4 w-4 transition-transform duration-300 ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </li>
      <Collapse as="ul" open={isOpen} className="mx-2">
        {categoryPages.map(({ title: subTitle, path }, i) => {
          return (
            <li
              key={i}
              className="mx-1.5 border-l border-gray-200 py-0.5 dark:border-gray-900"
            >
              <Link
                href={path}
                className="block -translate-x-px border-l border-transparent py-1 pl-4 pr-2 text-sm text-gray-500 transition-colors duration-300 hover:border-gray-950 hover:text-gray-950 dark:text-gray-400 dark:hover:border-gray-200 dark:hover:text-gray-200"
              >
                {subTitle}
              </Link>
            </li>
          );
        })}
      </Collapse>
    </ul>
  );
}

function getRoutes() {
  return routes.map(({ title, pages, categories }, idx) => {
    return (
      <React.Fragment key={idx}>
        <li className="p-2 text-sm font-medium text-gray-950 dark:text-gray-100">
          {title}
        </li>
        <ul className="mx-0.5 mb-6">
          {categories
            ? categories.map(({ pages: categoryPages, category }, key) => {
                return (
                  <Collapsible
                    key={key}
                    category={category}
                    categoryPages={categoryPages}
                  />
                );
              })
            : pages.map(({ title: subTitle, path }, key) => {
                return (
                  <li key={key}>
                    <Link
                      href={path}
                      className="block px-2 py-1.5 text-sm text-gray-500 transition-colors duration-300 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-200"
                    >
                      {subTitle}
                    </Link>
                  </li>
                );
              })}
        </ul>
      </React.Fragment>
    );
  });
}

export function Sidenav() {
  return (
    <div className="fixed -left-64 bottom-0 top-[65px] z-20 w-60 overflow-y-scroll pb-10 lg:left-auto">
      <div className="pointer-events-none sticky top-0 z-30 h-10 bg-gradient-to-b from-white from-50% to-transparent dark:from-gray-950" />
      <ul className="pr-2">{getRoutes()}</ul>
    </div>
  );
}

export default Sidenav;