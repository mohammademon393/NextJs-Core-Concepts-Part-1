import Image from "next/image";
import Link from "next/link";
import { Building2, Clock3, MessageSquareQuote, UserRound } from "lucide-react";

const StoryCard = ({ story }) => {
  const shortStory = story.story.split(" ").slice(0, 28).join(" ") + "...";

  return (
    <div className="group mx-auto flex w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:flex-row">
      {/* ================= LEFT IMAGE ================= */}
      <div className="relative h-[220px] w-full shrink-0 overflow-hidden md:h-auto md:w-[38%]">
        <img
          src={story.image}
          alt={story.name}
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />

        {/* Profile Information */}
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">
          <h2 className="text-2xl font-bold md:text-3xl">{story.name}</h2>

          <p className="mt-1 text-base font-semibold text-blue-400">
            {story.designation}
          </p>

          <div className="mt-3 flex items-center gap-2 text-sm text-slate-200">
            <Building2 size={18} />
            <span>{story.company}</span>
          </div>

          <div className="my-4 h-px bg-white/20" />

          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10">
              <Clock3 size={19} />
            </div>

            <div>
              <p className="text-xs text-slate-300">Experience</p>

              <p className="font-semibold">{story.experience}</p>
            </div>
          </div>
        </div>
      </div>

      {/* ================= RIGHT CONTENT ================= */}
      <div className="flex flex-1 flex-col">
        {/* Main Content */}
        <div className="p-6 md:p-8 lg:p-10">
          {/* Badge */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            <MessageSquareQuote size={18} />
            Developer Story
          </div>

          {/* Heading */}
          <h3 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            {story.name}
          </h3>

          {/* Story */}
          <div className="relative mt-6 pl-8">
            {/* Quote */}
            <span className="absolute left-0 top-0 text-5xl font-bold leading-none text-blue-300">
              “
            </span>

            <p className="text-base leading-8 text-slate-600 md:text-lg">
              {shortStory}
            </p>
          </div>

          {/* Divider */}
          <div className="my-8 h-px bg-slate-200" />

          {/* Skills */}
          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-500">
              Skills
            </h4>

            <div className="flex flex-wrap gap-3">
              {story.skills.slice(0, 5).map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700 transition-colors duration-200 hover:bg-blue-100"
                >
                  {skill}
                </span>
              ))}

              {story.skills.length > 5 && (
                <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-600">
                  +{story.skills.length - 5}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ================= FOOTER ================= */}
        <div className="mt-auto border-t border-slate-200 px-6 py-5 md:px-8 lg:px-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            {/* Experience */}
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-600">
                <UserRound size={21} />
              </div>

              <div>
                <p className="text-xs text-slate-400">Experience</p>

                <p className="font-bold text-slate-800">{story.experience}</p>
              </div>
            </div>

            {/* Read Button */}
            <Link
              href={`/stories/${story.id}`}
              className="inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-md shadow-blue-200 transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-300"
            >
              Read full Story
              <span className="text-xl transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
