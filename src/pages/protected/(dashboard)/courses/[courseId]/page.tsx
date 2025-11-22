import {
  Dashboard,
  DashboardContent,
  DashboardDescription,
  DashboardHeader,
  DashboardTitle,
} from "@/components/dashboard-page";
import { courses } from "@/constants";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  CheckCircle2Icon,
  ChevronRight,
  ChevronsUpDown,
  DotIcon,
  LockIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

const course = courses.at(0)!;

export const CoursePage = () => {
  return (
    <Dashboard>
      <DashboardHeader>
        <DashboardTitle>{course.title}</DashboardTitle>
        <DashboardDescription>{course.description}</DashboardDescription>
      </DashboardHeader>
      <DashboardContent>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-start-1 col-end-3">
            <img
              src={course.thumbnail}
              className="aspect-video rounded-md object-cover"
            />
          </div>
          <div>
            <div className="border rounded-md bg-background p-4 flex flex-col gap-4">
              {course.chapters.map((chapter) => (
                <Collapsible
                  key={chapter.id}
                  className="rounded-md bg-muted/80 border"
                >
                  <CollapsibleTrigger asChild>
                    <div className="p-4 cursor-pointer">
                      <div className="flex items-center justify-between">
                        <span>{chapter.title}</span>
                        <ChevronsUpDown size={18} className="shrink-0" />
                      </div>
                      <span className="text-sm mt-2 text-muted-foreground">
                        {chapter.description}
                      </span>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="p-4 pt-0 flex flex-col gap-2">
                    {chapter.lessons.map((lesson) => (
                      <div
                        key={lesson.id}
                        className={cn(
                          "p-3 bg-background rounded-md border",
                          lesson.title !== "Variables and Data Types" &&
                            !lesson.isCompleted
                            ? "text-muted-foreground"
                            : ""
                        )}
                      >
                        <div className="flex items-start">
                          <span>{lesson.title}</span>

                          {lesson.isCompleted && (
                            <CheckCircle2Icon
                              size={18}
                              className="shrink-0 text-primary ml-auto mt-1.5"
                            />
                          )}

                          {!lesson.isCompleted &&
                            lesson.title !== "Variables and Data Types" && (
                              <>
                                <LockIcon
                                  size={16}
                                  className="shrink-0 ml-auto mt-1.5"
                                />
                              </>
                            )}

                          {lesson.title === "Variables and Data Types" && (
                            <>
                              <ChevronRight
                                size={16}
                                className="shrink-0 ml-auto mt-1.5"
                              />
                            </>
                          )}
                        </div>
                        <div className="flex flex-wrap items-center text-sm text-muted-foreground">
                          <span>{lesson.learningMaterials.length} Lessons</span>
                          <DotIcon size={18} className="shrink-0" />
                          <span className="text-primary">+10 Points</span>
                        </div>
                      </div>
                    ))}
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </div>
      </DashboardContent>
    </Dashboard>
  );
};
