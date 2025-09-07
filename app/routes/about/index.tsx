import IconCloudDemo from '~/ui/TechSphere';
import TechTagCloud from '~/ui/TagCloud';
import ProfilePhoto from '~/ui/ProfileImage';

export default function AboutPage() {
  return (
    <div className="max-w-[1300px] mx-auto px-6 py-16 bg-gray-900">
      {/* Intro */}

      <div className="flex flex-col xl:flex-row xl:items-start items-center gap-10 mb-12 ">
        <div>
          <ProfilePhoto />
        </div>

        <div>
          <h1 className="text-3xl font-bold text-white mb-2">
            Hey, I'm Ryan 👋
          </h1>
          <p className="text-gray-300 text-lg">
            I’m a web developer based in South Korea who loves bringing ideas to
            life online. I enjoy building websites and apps that look great and
            actually work — from the layout and design all the way to the
            behind-the-scenes logic. Whether I’m creating smooth user
            experiences or solving tricky backend challenges, I get excited
            about turning complex problems into simple, useful tools that people
            enjoy using.
          </p>
        </div>
      </div>

      {/* Bio Section */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-white mb-4">My Mission</h2>
        <p className="text-gray-300 leading-relaxed">
          My mission is to build websites that feel good to use and make life a
          little easier. I love turning ideas into real, working web
          applications — from the first pixel on the screen to the last line of
          backend logic. Whether it's helping someone launch their dream project
          or creating tools that solve everyday problems, I’m here to make the
          web more useful, more beautiful, and more fun.
        </p>
      </div>
      <h2 className="text-2xl font-semibold text-white mb-4">🚀 Tech I Use</h2>
      <div className="my-10">
        <IconCloudDemo />
      </div>

      <TechTagCloud />
    </div>
  );
}
