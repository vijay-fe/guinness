"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { useScrollspy } from "../../utils/hooks/useScrollspy";
SideTabMenu
export default function SideTabMenu({ tabsData }) {
    const [activeTab, setActiveTab] = useState("");
    const activeId = useScrollspy(tabsData.map(tab => tab.id), 208);
    useEffect(() => {
        setActiveTab(activeId);
    }, [activeId]);

    return (
        <div className="side_section_box_container">
            {tabsData.map((item) => (
                <Link
                    onClick={() => setActiveTab(item.label)}
                    className={`side_section_box_item ${item.id === activeTab && "active"}`}
                    key={item.id}
                    href={`#${item.id}`}
                >
                    <div className="side_section_box_item_content">
                        <div>
                            {item.label}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
