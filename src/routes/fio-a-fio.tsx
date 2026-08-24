import { createFileRoute } from "@tanstack/react-router";
import { CoursePage } from "../components/CoursePage";
import { getCourse } from "../data/courses";

const course = getCourse("fio-a-fio");

export const Route = createFileRoute("/fio-a-fio")({
  head: () => ({
    meta: [
      { title: course.metaTitle },
      { name: "description", content: course.metaDescription },
      { property: "og:title", content: course.metaTitle },
      { property: "og:description", content: course.metaDescription },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <CoursePage course={course} />,
});
