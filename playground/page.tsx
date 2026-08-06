import React from "react";
import {useState} from "react";
import ReactDOM from "react-dom/client";
import {Disclosure} from "./components/Disclosure";
import {Modal} from "./components/Modal";
import {Tabs} from "./components/Tabs";

export function App(){
    //1. State for Disclosure
    const [isDisclosureOpen, setIsDisclosureOpen] = useState(false);

    //2. State or Modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    //State for Tabs (Tracks which specific tab string is active)
    const [activeTab, setActiveTab] = useState("tab1"); //initially set to "tab1"

    return (
        <main style ={{ padding: "2rem", maxWidth: "2560px", margin: "0 auto", fontFamily:"monospace"}}>
            <header style={{ borderBottom: "1px solid #ccc", paddingBottom: "1rem" }}>
                <h1>Accessibility Playground</h1>
                <p style = {{color: "#666"}}>
                     Hand-written accessible React + TypeScript components. 
                </p>
            </header>

            {/* Section 1: Disclosure */}
            <section style={{ marginTop: "2rem" }}>
                <h2>Disclosure (Accordion)</h2>
                <p style={{ color: "#666", fontSize: "0.9rem" }}>
                    Keyboard Test: Use <strong>Tab</strong> to focus, and <strong>Enter</strong> or <strong>Space</strong> to interact.
                </p>

                {/* Render area for <Disclosure /> */}
                <article style ={{padding: "1rem", border: "1px dashed #ccc", borderRadius: "4px"}}>
                    <Disclosure title="What is an accessible Disclosure?">
                        <p style={{ margin: 0 }}>
                            A disclosure component lets users show or hide content inline. It uses an
                            accessible button with <code>aria-expanded</code> to announce its state to screen readers.
                        </p>
                    </Disclosure>



                </article>
            </section>

            {/* Section 2: Modal Dialog */}
            <section style={{ marginTop: "2rem" }}>
                <h2>Modal Dialog</h2>
                <p style ={{color: "#666", fontSize: "0.9rem" }}>
                    Keyboard Test: Opens on Enter/Space. Focus gets trapped inside. Close with <strong>Esc</strong>.
                </p>

                <button onClick={() => setIsModalOpen(true)} 
                style ={{padding: "0.5rem 1rem", cursor: "pointer"}}>
                    Open Modal
                </button>

                <Modal
                    isOpen={isModalOpen}
                    onClose={() => {
                        console.log("Closing modal...");
                        setIsModalOpen(false);}}
                    title="Accessible Modal"
                >
                    <p style={{ margin: 0 }}>
                        This modal is powered by the native HTML <code>&lt;dialog&gt;</code> element!
                    </p>
                    <ul style={{ marginTop: "1rem", paddingLeft: "1.2rem" }}>
                        <li>Press <strong>Esc</strong> to close via <code>onCancel</code>.</li>
                        <li>Click outside on the <strong>backdrop</strong> to close.</li>
                        <li>Focus is automatically trapped inside by the browser.</li>
                    </ul>
                </Modal>

                {/* We will render <Modal /> here shortly */}
            </section>

            {/*Section 3: Tabs*/ }
            <section style={{ marginTop: "2rem" }}>
                <h2>Tabs</h2>
                <p style ={{color : "#666", fontSize: "0.9rem" }}>
                    Keyboard Test: Navigate between headers using <strong>←</strong> and <strong>→</strong> arrow keys.
                </p>

                {/* Render area for <Tabs /> */}
                <article style ={{padding: "1rem", border: "1px dashed #ccc", borderRadius: "4px"}}>
                    <Tabs
                        label="Playground tabs"
                        tabs={[
                            {
                                id: "tab1",
                                label: "First Tab",
                                content: <p style={{ margin: 0 }}>This is the first tab panel.</p>,
                            },
                            {
                                id: "tab2",
                                label: "Second Tab",
                                content: <p style={{ margin: 0 }}>This is the second tab panel.</p>,
                            },
                            {
                                id: "tab3",
                                label: "Third Tab",
                                content: <p style={{ margin: 0 }}>This is the third tab panel.</p>,
                            },
                        ]}
                    />
                </article>
            </section>
        </main> 
    );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);

export default App;