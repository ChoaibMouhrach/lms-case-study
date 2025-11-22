import { CourseCard } from "@/components/course-card";
import { Search } from "@/components/custom/search";
import { Button } from "@/components/ui/button";
import { courses } from "@/constants";
import { FilterIcon } from "lucide-react";

export const Courses = () => {
  return (
    <div>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          {["Overview", "Active", "Completed"].map((status) => (
            <Button
              key={status}
              variant={status === "Overview" ? "outline" : "ghost"}
            >
              {status}
            </Button>
          ))}
        </div>

        <Search className="max-w-md flex-1" placeholder="Search courses" />

        <Button size="icon" variant="outline" className="ml-auto">
          <FilterIcon size={16} />
        </Button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};
