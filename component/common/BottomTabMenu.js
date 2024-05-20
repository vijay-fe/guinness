"use client"
import Link from "next/link";
import { useState, useEffect } from "react";
import { useScrollspy } from "../../utils/hooks/useScrollspy";
export default function BottomTabMenu({ tabsData }) {
    const [activeTab, setActiveTab] = useState("");
    const activeId = useScrollspy(tabsData.map(tab => tab.id), 208);
    useEffect(() => {
        setActiveTab(activeId);
    }, [activeId]);
    return (
        <div className="bottom_tab_menu_container">
            {tabsData?.map((item) => (
                <Link
                    onClick={() => setActiveTab(item.id)}
                    className={`tab_item ${item.id === activeTab && "active"}`}
                    key={item.id}
                    href={`#${item.id}`}
                >
                    <div className="tab_item_content">
                        <div>
                            {item.label}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}
