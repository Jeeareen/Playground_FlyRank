import {useState} from "react";

//Define props with TypeScript (no "any" types)
interface DisclosureProps {
    title: string;
    children: React.ReactNode; //"accepts anything React can draw to the screen" type.
}

export function Disclosure({ title, children }: DisclosureProps) {
    //{ title, children } (Object Destructuring): Instead of receiving a single props object and typing props.title or props.children everywhere, JavaScript lets us "unpack" the properties directly by name.

    //Track expanded/collapsed state
    const [isOpen, setIsOpen] = useState(false);

    return (
        <article style ={{ border: "1px solid #ccc", borderRadius: "4px", margin: "0.5rem 0" }}>
            {/* Accessible button Trigger */}
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}//Toggle state on click
                aria-expanded={isOpen} //Indicates whether the content is expanded or collapsed
                style={{
                    width: "100%",
                    padding: "0.75rem 1rem",
                    textAlign: "left",
                    background: "#f5f5f5",
                    border: "none",
                    borderBottom: isOpen ? "1px solid #ccc" : "none",
                    cursor: "pointer",
                    fontWeight: "bold",
                    display: "flex", //These two lines use CSS Flexbox to automatically layout and align the items inside the <button>.
                    justifyContent: "space-between",
                }}>

                <span>{title}</span> {/*Unlike block-level elements like <p>, <div>, or <h1> (which start on a brand new line and stack vertically), a <span> takes up only as much space as its content and sits side-by-side with surrounding text.*/}
                <span aria-hidden="true">{isOpen ? "▲" : "▼"}</span> {/*aria-hidden is used to hide the arrow icon from screen readers, as it is purely decorative and does not convey any additional information about the disclosure's state.*/}
                </button>

                {/* Collabsible content area */}
                {isOpen && (
                    <div style={{ padding: "1rem"}}>
                        {children}
                    </div>
                )}

        </article>
    );
}