import HomeButton from "@/components/panelComponents/homeButtons";
import { navItems } from "@/utils/lists";

export default function HomePage() {
  return (
    <div className="w-full h-full grid grid-cols-4 gap-4">
      {Object.entries(navItems).map(([category, buttons], index) => (
        <div
          key={index}
          className="flex flex-col border border-gray-300 bg-white p-4 gap-y-2 rounded-lg"
        >
          <h1 className="font-medium text-zinc-700">{category}</h1>
          {buttons.map((button) => (
            <HomeButton
              key={button.id}
              icon={button.icon}
              label={button.label}
              redirectTo={button.redirectTo}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
