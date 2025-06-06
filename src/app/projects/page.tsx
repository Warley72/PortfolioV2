import CardProjects from "@/components/layout/cardProjects/CardProjects";
import Navigation from "@/components/layout/navigation/Navigation";
import { Card } from "@/components/ui/card";

export default function Projects() {
    return(
        <div className="bg-zinc-950 text-white p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
                <Navigation />
                <h1 className="font-mono text-4xl font-bold mb-4">Projects</h1>
                <p className="text-lg text-[#A1A1AA] font-semibold mb-8">Explore my portfolio of client and personal projects.</p>
                <Card className="p-4 bg-zinc-950 border border-white/20">
                    <CardProjects 
                        title={"Xcode Dracula Theme"} 
                        description={"A VS Code theme inspired by Xcode and Dracula."} 
                        image={"/1.jpeg"} 
                        year={"2025"} 
                    />
                </Card>
            </div>
        </div>
    )
}