import {
  Dashboard,
  DashboardContent,
  DashboardDescription,
  DashboardHeader,
  DashboardTitle,
} from "@/components/dashboard-page";
import { Button } from "@/components/ui/button";
import { courses, quizObject } from "@/constants";
import { cn } from "@/lib/utils";
import {
  CheckCheckIcon,
  FileIcon,
  LinkIcon,
  LockIcon,
  VideoIcon,
  Code2Icon,
  ClipboardListIcon,
  BookOpenIcon,
  CircleIcon,
  GripHorizontal,
  ClockIcon,
  ClipboardType,
} from "lucide-react";
import { useState } from "react";
import { useParams } from "@tanstack/react-router";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Progress } from "@/components/ui/progress";

type CourseType = (typeof courses)[number];
type LessonType = CourseType["chapters"][number]["lessons"][number];

export const LessonPage = () => {
  const { courseId, lessonId } = useParams({ strict: false });

  // Find the course and lesson based on the route parameters
  const course = courses.find((c) => c.id === courseId);

  let lesson: LessonType | undefined;
  if (course) {
    for (const chapter of course.chapters) {
      const foundLesson = chapter.lessons.find((l) => l.id === lessonId);
      if (foundLesson) {
        lesson = foundLesson;
        break;
      }
    }
  }

  if (!lesson) {
    return (
      <Dashboard>
        <DashboardContent>
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold">Leçon introuvable</h2>
          </div>
        </DashboardContent>
      </Dashboard>
    );
  }

  return (
    <Dashboard>
      <DashboardHeader>
        <DashboardTitle>{lesson.title}</DashboardTitle>
        <DashboardDescription>{lesson.description}</DashboardDescription>
      </DashboardHeader>
      <DashboardContent>
        <Lesson lesson={lesson} />
      </DashboardContent>
    </Dashboard>
  );
};

interface LessonProps {
  lesson: NonNullable<
    typeof courses
  >[number]["chapters"][number]["lessons"][number];
}

const Lesson: React.FC<LessonProps> = ({ lesson }) => {
  const form = useForm();
  const [currentMaterial, setCurrentMaterial] = useState<number>(0);

  const progressPercentage = Math.round(
    (currentMaterial / lesson.learningMaterials.length) * 100,
  );

  const getMaterialIcon = (type: string) => {
    switch (type) {
      case "video":
        return <VideoIcon size={16} />;
      case "document":
        return <FileIcon size={16} />;
      case "link":
        return <LinkIcon size={16} />;
      case "code":
        return <Code2Icon size={16} />;
      case "exercise":
        return <ClipboardListIcon size={16} />;
      case "quiz":
        return <BookOpenIcon size={16} />;
      default:
        return <FileIcon size={16} />;
    }
  };

  const getMaterialDuration = (
    material: (typeof lesson.learningMaterials)[number],
  ) => {
    if ("duration" in material && material.duration) {
      return material.duration;
    }
    if ("questionsCount" in material && material.questionsCount) {
      return `${material.questionsCount} questions`;
    }
    return null;
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case "video":
        return "vidéo";
      case "document":
        return "document";
      case "link":
        return "lien";
      case "code":
        return "code";
      case "exercise":
        return "exercice";
      case "quiz":
        return "quiz";
      default:
        return type;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-start-1 lg:col-end-3 gap-4">
        {currentMaterial < lesson.learningMaterials.length && (
          <iframe
            src={lesson.learningMaterials[currentMaterial].url}
            className=" aspect-video border rounded-md overflow-hidden"
            allowFullScreen
          />
        )}

        {currentMaterial === lesson.learningMaterials.length && (
          <Form {...form}>
            <form className="border bg-background rounded-md p-4">
              <div>
                <span className="text-lg">{quizObject.title}</span>
                <span className="block  text-muted-foreground">
                  {quizObject.description}
                </span>
              </div>
              <div className="mt-6 flex flex-col gap-4">
                {quizObject.questions
                  .filter((question) =>
                    [
                      "short-answer",
                      "true-false",
                      "multiple-choice",
                      "ordering",
                    ].includes(question.type),
                  )
                  .map((question) => (
                    <FormField
                      name={question.id}
                      key={question.id}
                      render={() => (
                        <FormItem>
                          <FormLabel>{question.question}</FormLabel>
                          <FormControl>
                            <div>
                              {question.type === "short-answer" && (
                                <Textarea
                                  className="h-32"
                                  placeholder={question.sampleAnswer}
                                />
                              )}

                              {question.type === "true-false" && (
                                <div className="gap-1 flex flex-col text-sm text-muted-foreground">
                                  <div className="border rounded-md bg-muted/60 p-2">
                                    Vrai
                                  </div>
                                  <div className="border rounded-md bg-muted/60 p-2">
                                    Faux
                                  </div>
                                </div>
                              )}

                              {(question.type === "multiple-choice" ||
                                question.type === "multiple-select") && (
                                <div className="gap-1 flex flex-col text-sm text-muted-foreground">
                                  {question.options?.map((option) => (
                                    <div
                                      key={option.id}
                                      className="border rounded-md bg-muted/60 p-2 text-sm"
                                    >
                                      <CircleIcon
                                        size={14}
                                        className="inline mr-2"
                                      />
                                      {option.text}
                                    </div>
                                  ))}
                                </div>
                              )}

                              {question.type === "ordering" && (
                                <div className="gap-1 flex flex-col text-sm text-muted-foreground">
                                  {question.items?.map((option) => (
                                    <div
                                      key={option.id}
                                      className="border rounded-md bg-muted/60 p-2 text-sm"
                                    >
                                      <GripHorizontal
                                        size={14}
                                        className="inline mr-2"
                                      />
                                      {option.text}
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </FormControl>
                          <FormMessage />
                          <FormDescription>
                            {question.explanation}
                          </FormDescription>
                        </FormItem>
                      )}
                    />
                  ))}
              </div>
              <Button className="mt-4">Soumettre les réponses</Button>
            </form>
          </Form>
        )}

        {currentMaterial < lesson.learningMaterials.length && (
          <Button
            className="mt-2"
            onClick={() => setCurrentMaterial((cm) => cm + 1)}
          >
            Marquer comme terminé
          </Button>
        )}
      </div>
      <div className="lg:col-start-3 lg:col-end-4">
        <div className="flex flex-col lg:sticky lg:top-4 gap-2">
          <div className="border rounded-md bg-background p-4 flex items-center">
            <span>Crédits ECTS</span>
            <span className="ml-auto text-primary flex items-center">
              +2 ECTS
            </span>
          </div>

          <div className="border rounded-md bg-background p-4 mb-4">
            <div className="flex items-center justify-between text-sm ">
              <span>Progression</span>
              <span className="text-primary">{progressPercentage}%</span>
            </div>
            <Progress value={progressPercentage} className="mt-1 h-2.5" />
          </div>

          {lesson.learningMaterials.map((material, index) => (
            <button
              key={material.id}
              onClick={() =>
                index <= currentMaterial && setCurrentMaterial(index)
              }
              disabled={index > currentMaterial}
              className={cn(
                "p-4 bg-background rounded-md border text-left transition-colors",
                index > currentMaterial
                  ? "text-muted-foreground cursor-not-allowed"
                  : "hover:bg-muted cursor-pointer",
                index === currentMaterial && "ring-2 ring-primary",
              )}
            >
              <div className="flex items-start gap-2">
                <div className="mt-1">{getMaterialIcon(material.type)}</div>
                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm truncate">
                    {material.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    {getMaterialDuration(material) && (
                      <span className="text-xs text-muted-foreground">
                        {getMaterialDuration(material)}
                      </span>
                    )}
                    <span className="text-xs text-muted-foreground capitalize">
                      {getTypeLabel(material.type)}
                    </span>
                  </div>
                </div>
                <div className="mt-1">
                  {index > currentMaterial && <LockIcon size={16} />}
                  {index < currentMaterial && (
                    <CheckCheckIcon size={16} className="text-green-600" />
                  )}
                </div>
              </div>
            </button>
          ))}

          <button
            className={cn(
              "p-4 bg-background rounded-md border text-left transition-colors",
              currentMaterial !== lesson.learningMaterials.length
                ? "text-muted-foreground cursor-not-allowed"
                : "hover:bg-muted cursor-pointer",
              lesson.learningMaterials.length === currentMaterial &&
                "ring-2 ring-primary",
            )}
          >
            <div className="flex items-center gap-2">
              <div className="mt-1">
                <ClipboardType size={18} />
              </div>
              <div className="flex-1 min-w-0 flex items-center mt-1">Quiz</div>
              <div className="mt-1">
                {currentMaterial !== lesson.learningMaterials.length && (
                  <LockIcon size={16} />
                )}
                {currentMaterial === lesson.learningMaterials.length && (
                  <ClockIcon size={16} className="text-green-600" />
                )}
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
