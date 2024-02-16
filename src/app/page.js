import Image from "next/image";

const Part = ({ title, content, id }) => {
    return (
        <article className="mb-4">
            <h2 id={id} className="mb-2 font-bold text-lg">{title}</h2>
            <p>{content}</p>
        </article>
    );
};

export default function Home() {
    const blog_content = [
        {
            title: "Parte 1 - Um título interessante",
            content:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repudiandae ullam, aperiam optio illum tempore explicabo! Animi, quos ipsum. Repellendus expedita voluptates hic dolorum itaque est iste! Iste, id quam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repudiandae ullam, aperiam optio illum tempore explicabo! Animi, quos ipsum. Repellendus expedita voluptates hic dolorum itaque est iste! Iste, id quam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repudiandae ullam, aperiam optio illum tempore explicabo! Animi, quos ipsum. Repellendus expedita voluptates hic dolorum itaque est iste! Iste, id quam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repudiandae ullam, aperiam optio illum tempore explicabo! Animi, quos ipsum. Repellendus expedita voluptates hic dolorum itaque est iste! Iste, id quam!",
        },
        {
            title: "Parte 2 - Nada mal, continue",
            content:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repudiandae ullam, aperiam optio illum tempore explicabo! Animi, quos ipsum. Repellendus expedita voluptates hic dolorum itaque est iste! Iste, id quam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repudiandae ullam, aperiam optio illum tempore explicabo! Animi, quos ipsum. Repellendus expedita voluptates hic dolorum itaque est iste! Iste, id quam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repudiandae ullam, aperiam optio illum tempore explicabo! Animi, quos ipsum. Repellendus expedita voluptates hic dolorum itaque est iste! Iste, id quam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repudiandae ullam, aperiam optio illum tempore explicabo! Animi, quos ipsum. Repellendus expedita voluptates hic dolorum itaque est iste! Iste, id quam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repudiandae ullam, aperiam optio illum tempore explicabo! Animi, quos ipsum. Repellendus expedita voluptates hic dolorum itaque est iste! Iste, id quam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repudiandae ullam, aperiam optio illum tempore explicabo! Animi, quos ipsum. Repellendus expedita voluptates hic dolorum itaque est iste! Iste, id quam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repudiandae ullam, aperiam optio illum tempore explicabo! Animi, quos ipsum. Repellendus expedita voluptates hic dolorum itaque est iste! Iste, id quam!",
        },
        {
            title: "Parte 3 - Enfim um encerramento",
            content:
                "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repudiandae ullam, aperiam optio illum tempore explicabo! Animi, quos ipsum. Repellendus expedita voluptates hic dolorum itaque est iste! Iste, id quam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repudiandae ullam, aperiam optio illum tempore explicabo! Animi, quos ipsum. Repellendus expedita voluptates hic dolorum itaque est iste! Iste, id quam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repudiandae ullam, aperiam optio illum tempore explicabo! Animi, quos ipsum. Repellendus expedita voluptates hic dolorum itaque est iste! Iste, id quam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repudiandae ullam, aperiam optio illum tempore explicabo! Animi, quos ipsum. Repellendus expedita voluptates hic dolorum itaque est iste! Iste, id quam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repudiandae ullam, aperiam optio illum tempore explicabo! Animi, quos ipsum. Repellendus expedita voluptates hic dolorum itaque est iste! Iste, id quam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repudiandae ullam, aperiam optio illum tempore explicabo! Animi, quos ipsum. Repellendus expedita voluptates hic dolorum itaque est iste! Iste, id quam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repudiandae ullam, aperiam optio illum tempore explicabo! Animi, quos ipsum. Repellendus expedita voluptates hic dolorum itaque est iste! Iste, id quam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repudiandae ullam, aperiam optio illum tempore explicabo! Animi, quos ipsum. Repellendus expedita voluptates hic dolorum itaque est iste! Iste, id quam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta repudiandae ullam, aperiam optio illum tempore explicabo! Animi, quos ipsum. Repellendus expedita voluptates hic dolorum itaque est iste! Iste, id quam!",
        },
    ];

    return (
        <>
            <nav className="h-16 bg-red-500 flex justify-center items-center shadow-lg">
                Navbar
            </nav>
            <main className="flex">
                <aside className="w-1/4 m-h bg-yellow-600 flex flex-col pr-2 pl-2 pt-4">
                    <header className="mb-4 font-bold text-lg">Menu lateral</header>
                    {blog_content.map((b, id) => {
                        return (
                            <a key={id} href={`#Part-${id}`} className="font-bold">
                                {b.title.split(" - ")[0]}
                            </a>
                        );
                    })}
                </aside>
                <section className="bg-green-500 w-full pl-4 pr-4 pt-4">
                    <h1 className="mb-4 text-xl font-bold">Título da página</h1>
                    <hr className="mb-2 -mr-2 -ml-2" />
                    {blog_content.map((b, id) => {
                        return (
                            <Part
                                key={id}
                                id={`Part-${id}`}
                                title={b.title}
                                content={b.content}
                            />
                        );
                    })}
                </section>
            </main>
        </>
    );
}
