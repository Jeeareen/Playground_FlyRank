import { useId, useRef, useState } from "react";
//NOTE: useId creates a unique ID for accessibility writing.

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
  label?: string;
}

//if no label is provided, use the default text
export function Tabs({ tabs, defaultTabId, label = "Content tabs" }: TabsProps) {
  if (!tabs.length) {
    return null;
  }
//Return early if there are no tabs

  const initialTabId = defaultTabId ?? tabs[0].id;
  //?? means “use the left side unless it is null or undefined.”
  const [activeTabId, setActiveTabId] = useState(initialTabId);
  const tabListId = useId();
  //It helps connect: each tab button with its associated panel
  const tabButtonRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const focusTabAtIndex = (index: number) => {
    const nextButton = tabButtonRefs.current[index];
    if (!nextButton) return;

    nextButton.focus();
    //setActiveTabId(tabs[index].id); - if u want to directly show the content of the tab when navigating with arrow keys, uncomment this line because i want the user to press enter / space to do so.

  };

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        focusTabAtIndex((index + 1) % tabs.length);
        break;
      case "ArrowLeft":
        event.preventDefault();
        focusTabAtIndex((index - 1 + tabs.length) % tabs.length);
        break;
      case "Home":
        event.preventDefault();
        focusTabAtIndex(0);
        break;
      case "End":
        event.preventDefault();
        focusTabAtIndex(tabs.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div
        role="tablist"
        aria-label={label}
        aria-orientation="horizontal"
        style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}
      >
        {tabs.map((tab, index) => {
          const isSelected = tab.id === activeTabId;

          return (
            <button
              key={tab.id}
              ref={(node) => {
                tabButtonRefs.current[index] = node;
              }}
              id={`${tabListId}-${tab.id}`}
              type="button"
              role="tab"
              aria-selected={isSelected}
              aria-controls={`${tabListId}-panel-${tab.id}`}
              tabIndex={isSelected ? 0 : -1}
              onClick={() => setActiveTabId(tab.id)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              style={{
                padding: "0.5rem 0.75rem",
                border: isSelected ? "1px solid #2563eb" : "1px solid #ccc",
                borderBottom: isSelected ? "2px solid #2563eb" : "1px solid #ccc",
                background: isSelected ? "#eff6ff" : "#fff",
                cursor: "pointer",
                fontWeight: isSelected ? 700 : 400,
              }}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {tabs.map((tab) => {
        //Now the component loops through the tabs again and creates a panel for each one.

        const isSelected = tab.id === activeTabId;
        

        return (
          <section
            key={tab.id}
            id={`${tabListId}-panel-${tab.id}`}
            role="tabpanel"
            aria-labelledby={`${tabListId}-${tab.id}`}
            hidden={!isSelected}
            tabIndex={0}
            style={{
              border: "1px solid #e5e7eb",
              borderRadius: "6px",
              padding: "1rem",
              background: "#fafafa",
            }}
          >
            {tab.content} //Showing the panel content

          </section>
        );
      })}
    </>
  );
}
