import { TaskParamType, TaskType } from "@/types/task";
import { Globe2, GlobeIcon, GoalIcon, LucideProps } from "lucide-react";

export const LANUNCH_BROWSER_TASK={
    type:TaskType.LAUNCH_BROWSER,
    label:TaskType.LAUNCH_BROWSER,
    icon:(props:LucideProps)=>(<GlobeIcon className="stroke-pink-400" {...props}/>),
    isEntryPoint:true,
    inputs:[
        {
            name:"Website Url",
            type:TaskParamType.STRING,
            helperText:"eg: https://www.google.com",
            required:true,
            hideHandle:false
        }
    ]

}