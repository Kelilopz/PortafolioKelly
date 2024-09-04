import T1 from "../assets/T1.jpg"
import T2 from "../assets/T2.png"
import T3 from "../assets/T3.jpg"


export default function aboutMe() {
  return (
    <div>
      <div className="relative rounded-xl overflow-auto p-8 hover:animate-pulse">
      <div className="overflow-hidden relative max-w-md mx-auto bg-white shadow-lg ring-1  ring-black/5 rounded-xl flex items-center gap-6 dark:bg-slate-800 dark:highlight-white/5">
        <img src={T1}  className="absolute -left-6_w-28 h-28 rounded-full shadow-lg" />
        <div className="min-w-0 py-5 pl-28 pr-5">
          <div className="text-slate-900 font-medium">
            Vision
          </div>
          <div></div>
        </div>
      </div>
      </div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}
