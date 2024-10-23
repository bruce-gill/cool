import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { BookOpen, Code, Database, Globe, Server, Smartphone } from "lucide-react"

const classes = [
  {
    code: "CS 142",
    name: "Introduction to Computer Programming",
    description: "Learn the basics of programming using Python.",
    icon: <Code className="h-8 w-8" />,
    semesters: ["Fall", "Winter"],
    emphasis: ["Software Engineering", "Data Science"],
  },
  {
    code: "CS 235",
    name: "Data Structures",
    description: "Study fundamental data structures and algorithms.",
    icon: <Database className="h-8 w-8" />,
    semesters: ["Fall", "Winter", "Spring"],
    emphasis: ["Software Engineering", "Data Science", "Machine Learning"],
  },
  {
    code: "CS 260",
    name: "Web Programming",
    description: "Develop dynamic web applications using modern technologies.",
    icon: <Globe className="h-8 w-8" />,
    semesters: ["Fall", "Winter"],
    emphasis: ["Software Engineering", "Web Development"],
  },
  {
    code: "CS 324",
    name: "Systems Programming",
    description: "Explore low-level systems programming concepts.",
    icon: <Server className="h-8 w-8" />,
    semesters: ["Fall", "Winter"],
    emphasis: ["Software Engineering", "Computer Systems"],
  },
  {
    code: "CS 356",
    name: "Designing the User Experience",
    description: "Learn principles of user interface and experience design.",
    icon: <Smartphone className="h-8 w-8" />,
    semesters: ["Winter"],
    emphasis: ["Software Engineering", "Web Development"],
  },
  {
    code: "CS 450",
    name: "Computer Vision",
    description: "Study algorithms for understanding and analyzing images.",
    icon: <BookOpen className="h-8 w-8" />,
    semesters: ["Fall"],
    emphasis: ["Machine Learning", "Data Science"],
  },
]

export function ByuCsClasses() {
  const [searchTerm, setSearchTerm] = useState("")
  const [semesterFilter, setSemesterFilter] = useState("All")
  const [emphasisFilter, setEmphasisFilter] = useState("All")
  const [sortBy, setSortBy] = useState("code")

  const filteredAndSortedClasses = classes
    .filter((cls) =>
      cls.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cls.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cls.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((cls) => semesterFilter === "All" || cls.semesters.includes(semesterFilter))
    .filter((cls) => emphasisFilter === "All" || cls.emphasis.includes(emphasisFilter))
    .sort((a, b) => {
      if (sortBy === "code") return a.code.localeCompare(b.code)
      if (sortBy === "name") return a.name.localeCompare(b.name)
      return 0
    })

  const allEmphases = Array.from(new Set(classes.flatMap((cls) => cls.emphasis)))

  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <a href="#" className="flex items-center justify-center">
          <BookOpen className="h-6 w-6" />
          <span className="sr-only">BYU CS Department</span>
        </a>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Home
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Classes
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Faculty
          </a>
          <a className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </a>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  BYU Computer Science Classes
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Explore our diverse range of computer science courses designed to prepare you for the digital future.
                </p>
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <Input
                placeholder="Search classes..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="max-w-sm mx-auto"
              />
              <div className="flex flex-wrap justify-center gap-4">
                <Select value={semesterFilter} onValueChange={setSemesterFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by semester" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Semesters</SelectItem>
                    <SelectItem value="Fall">Fall</SelectItem>
                    <SelectItem value="Winter">Winter</SelectItem>
                    <SelectItem value="Spring">Spring</SelectItem>
                    <SelectItem value="Summer">Summer</SelectItem>
                  </SelectContent>
                </Select>
                <Select value={emphasisFilter} onValueChange={setEmphasisFilter}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Filter by emphasis" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">All Emphases</SelectItem>
                    {allEmphases.map((emphasis) => (
                      <SelectItem key={emphasis} value={emphasis}>
                        {emphasis}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="code">Sort by Code</SelectItem>
                    <SelectItem value="name">Sort by Name</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-8">
              {filteredAndSortedClasses.map((cls) => (
                <Card key={cls.code}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      {cls.icon}
                      <span>{cls.code}</span>
                    </CardTitle>
                    <CardDescription>{cls.name}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>{cls.description}</p>
                    <div className="mt-2">
                      <strong>Offered:</strong> {cls.semesters.join(", ")}
                    </div>
                    <div>
                      <strong>Emphasis:</strong> {cls.emphasis.join(", ")}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Learn More</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          © 2023 Brigham Young University Computer Science Department. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </a>
          <a className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </a>
        </nav>
      </footer>
    </div>
  )
}