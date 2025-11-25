import { CalendarIcon, UserIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { useNavigate } from "@tanstack/react-router";

interface CourseCardProps {
  course: {
    progress: number;
    id: string;
    title: string;
    description: string;
    tags: string[];
    thumbnail: string;
    courseCode: string;
    ects: number;
    instructor: {
      name: string;
    };
  };
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate({
      to: "/courses/$courseId",
      params: {
        courseId: course.id,
      },
    });
  };

  return (
    <div
      className="border rounded-md overflow-hidden bg-background hover:bg-background/50 cursor-pointer delay-100 transition select-none"
      onClick={onNavigate}
    >
      <img
        src={course.thumbnail}
        className="aspect-video object-cover w-full"
      />
      <div className="p-3 sm:p-4">
        <div className="flex items-center gap-2 mb-2">
          <Badge variant="outline" className="text-xs px-2 py-0.5">
            {course.courseCode}
          </Badge>
          <Badge variant="secondary" className="text-xs px-2 py-0.5">
            {course.ects} ECTS
          </Badge>
        </div>
        <h3
          className="font-medium text-sm sm:text-base leading-tight overflow-hidden"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {course.title}
        </h3>

        <div className="my-3 sm:my-4">
          <div className="flex items-center justify-between text-xs">
            <span>Progression</span>
            <span className="text-primary font-medium">{course.progress}%</span>
          </div>
          <Progress value={course.progress} className="mt-1 h-2" />
        </div>

        <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
          <UserIcon size={14} />
          <span className="truncate">{course.instructor.name}</span>
        </div>
        <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-2">
          <CalendarIcon size={14} />
          <span className="truncate">
            {new Date().toLocaleDateString("fr-FR", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {course.tags.slice(0, 3).map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="text-xs px-2 py-0.5"
            >
              {tag}
            </Badge>
          ))}
          {course.tags.length > 3 && (
            <Badge variant="secondary" className="text-xs px-2 py-0.5">
              +{course.tags.length - 3}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
};
