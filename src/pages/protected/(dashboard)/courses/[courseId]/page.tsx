import { Dashboard, DashboardContent } from "@/components/dashboard-page";
import { courses } from "@/constants";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  CalendarIcon,
  ChevronRight,
  ChevronsUpDown,
  DotIcon,
  LockIcon,
  PlayCircleIcon,
  UserIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { useNavigate, useParams } from "@tanstack/react-router";

type CourseType = (typeof courses)[number];

export const CoursePage = () => {
  const { courseId } = useParams({ strict: false });
  const navigate = useNavigate();

  // Find the course based on the route parameter
  const course = courses.find((c) => c.id === courseId);

  if (!course) {
    return (
      <Dashboard>
        <DashboardContent>
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold">Cours introuvable</h2>
          </div>
        </DashboardContent>
      </Dashboard>
    );
  }

  return (
    <Dashboard>
      <DashboardContent>
        <div className="mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink
                  onClick={() => navigate({ to: "/dashboard" })}
                  className="cursor-pointer"
                >
                  Tableau de bord
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink
                  onClick={() => navigate({ to: "/dashboard" })}
                  className="cursor-pointer"
                >
                  Cours
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{course.courseCode} - {course.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-start-1 lg:col-end-3">
            <CourseInfo course={course} />
          </div>
          <div className="lg:col-start-3 lg:col-end-6">
            <div className="rounded-md flex flex-col gap-4">
              {course.chapters.map((chapter, chapterIndex) => (
                <ChapterCard
                  key={chapter.id}
                  chapter={chapter}
                  chapterIndex={chapterIndex}
                  courseId={course.id}
                />
              ))}
            </div>
          </div>
        </div>
      </DashboardContent>
    </Dashboard>
  );
};

interface LessonCardProps {
  lesson: CourseType["chapters"][number]["lessons"][number];
  courseId: string;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson, courseId }) => {
  const navigate = useNavigate();

  const onNavigate = () => {
    navigate({
      to: "/courses/$courseId/lesson/$lessonId",
      params: {
        courseId: courseId,
        lessonId: lesson.id,
      },
    });
  };

  return (
    <div
      onClick={onNavigate}
      className={cn(
        "p-3 bg-muted/40 rounded-md border hover:bg-muted/60 select-none cursor-pointer",
        lesson.title !== "Variables et types de données" && !lesson.isCompleted
          ? "text-muted-foreground"
          : ""
      )}
    >
      <div className="flex items-start">
        <span>{lesson.title}</span>

        {lesson.isCompleted && (
          <PlayCircleIcon
            size={18}
            className="shrink-0 text-primary ml-auto mt-1.5"
          />
        )}

        {!lesson.isCompleted &&
          lesson.title !== "Variables et types de données" && (
            <>
              <LockIcon size={16} className="shrink-0 ml-auto mt-1.5" />
            </>
          )}

        {lesson.title === "Variables et types de données" && (
          <>
            <ChevronRight size={16} className="shrink-0 ml-auto mt-1.5" />
          </>
        )}
      </div>
      <div className="flex flex-wrap items-center text-sm text-muted-foreground">
        <span>{lesson.learningMaterials.length} Ressources</span>
        <DotIcon size={18} className="shrink-0" />
        <span className="text-primary">+10 Pièces</span>
      </div>
    </div>
  );
};

interface ChapterCardProps {
  chapter: CourseType["chapters"][number];
  chapterIndex: number;
  courseId: string;
}

const ChapterCard: React.FC<ChapterCardProps> = ({
  chapter,
  chapterIndex,
  courseId,
}) => {
  return (
    <Collapsible
      key={chapter.id}
      className="rounded-md bg-background border"
      defaultOpen={chapterIndex <= 1}
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
          <LessonCard key={lesson.id} lesson={lesson} courseId={courseId} />
        ))}
      </CollapsibleContent>
    </Collapsible>
  );
};

interface CourseInfoProps {
  course: CourseType;
}

const CourseInfo: React.FC<CourseInfoProps> = ({ course }) => {
  // Calculate real progress based on completed lessons
  const calculateProgress = () => {
    const totalLessons = course.chapters.reduce(
      (total, chapter) => total + chapter.lessons.length,
      0
    );
    const completedLessons = course.chapters.reduce(
      (completed, chapter) =>
        completed +
        chapter.lessons.filter((lesson) => lesson.isCompleted).length,
      0
    );
    return totalLessons > 0
      ? Math.round((completedLessons / totalLessons) * 100)
      : 0;
  };

  // Calculate total pieces earned from completed lessons
  const calculatePieces = () => {
    return course.chapters.reduce(
      (total, chapter) =>
        total +
        chapter.lessons.filter((lesson) => lesson.isCompleted).length * 10,
      0
    );
  };

  const actualProgress = calculateProgress();
  const earnedPieces = calculatePieces();

  return (
    <div>
      <div className="relative rounded-md overflow-hidden">
        <img
          src={course.thumbnail}
          className="aspect-video rounded-md object-cover"
        />

        <div className="absolute top-0 right-0 bg-black/60 w-full h-full flex items-end text-white p-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs bg-white/20 px-2 py-1 rounded">
                {course.courseCode}
              </span>
              <span className="text-xs bg-white/20 px-2 py-1 rounded">
                {course.ects} ECTS
              </span>
            </div>
            <span className="block text-xl">{course.title}</span>
            <p className="mt-1 text-white/80 max-w-md">{course.description}</p>

            <div className="mt-4 text-sm text-white/80 flex items-center">
              <div className="flex items-center gap-2">
                <UserIcon size={16} /> <span>{course.instructor.name}</span>
              </div>

              <DotIcon size={16} />

              <div className="flex items-center gap-2">
                <CalendarIcon size={14} />
                <span>
                  {new Date(course.updatedAt).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-background border rounded-md p-4 mt-4">
        <div>
          <div>
            <div className="grid grid-cols-2">
              <div className="flex flex-col items-center">
                <span className="text-xl text-primary">{earnedPieces}</span>
                <span className="text-sm text-muted-foreground">Pièces</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-xl text-primary">{actualProgress}%</span>
                <span className="text-sm text-muted-foreground">
                  Progression
                </span>
              </div>
            </div>

            <Progress value={actualProgress} className="mt-4 h-2.5" />
          </div>

          <div className="space-y-2 text-sm mt-4">
            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Enseignant</span>
              <div className="text-right">
                <span className="">{course.instructor.name}</span>
                <br />
                <span className="text-xs text-muted-foreground">
                  {course.instructor.title}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Semestre</span>
              <span className="">{course.semester}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Prérequis</span>
              <span className=" text-right max-w-[200px]">
                {course.prerequisite}
              </span>
            </div>

            <div className="flex items-start justify-between">
              <span className="text-muted-foreground">Évaluation</span>
              <span className=" text-right max-w-[200px] leading-tight">
                {course.evaluationMethod}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-muted-foreground">Étudiants inscrits</span>
              <span className="">{course.studentsEnrolled}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
