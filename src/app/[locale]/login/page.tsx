import AnimatedInput from "@/components/AnimatedInput";
import { useTranslations } from "next-intl";

export default function Index(){
    const t = useTranslations("Index");
    
    
    return <main className="flex flex-col items-center justify-center min-h-screen">
            <AnimatedInput name="username" id="username" label="Username"  placeholder=""/>
            <AnimatedInput name="password" id="password" type="password" label="Password"  placeholder="" />
        </main>
    ;
}