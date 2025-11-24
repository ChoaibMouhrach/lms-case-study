import { CourseCard } from "@/components/course-card";
import { Search } from "@/components/custom/search";
import { Button } from "@/components/ui/button";
import { courses } from "@/constants";
import { FilterIcon } from "lucide-react";

export const Courses = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-2">
        <div className="flex items-center gap-1 flex-wrap">
          {["Aperçu", "Actifs", "Terminés"].map((status) => (
            <Button
              key={status}
              variant={status === "Aperçu" ? "outline" : "ghost"}
              size="sm"
            >
              {status}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto sm:flex-1 sm:max-w-md">
          <Search className="flex-1" placeholder="Rechercher des cours" />

          <Button size="icon" variant="outline">
            <FilterIcon size={16} />
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 mt-6">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={{
              ...course,
              tags: [...course.tags],
            }}
          />
        ))}
      </div>
    </div>
  );
};
