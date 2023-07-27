import React from "react";
import styles from "../../app/page.module.css";

async function getHomeData() {
  try {
    const indexResponse = await fetch("http://127.0.0.1:8000/get_hp_data", {
      cache: "force-cache",
    });
    if (!indexResponse.ok) {
      throw new Error("Failed to fetch hp data.");
    }
    console.log("Refetching hp data");
    return indexResponse.json();
  } catch (error) {
    console.error("Error fetching hp data:", error);
    throw error;
  }
}

export default async function Page() {
  const homePageData = (await getHomeData()).data;

  console.log("Rerendering Home Component");

  return (
    <div className="flex flex-col items-center pt-10">
      <div dangerouslySetInnerHTML={{ __html: homePageData.headline }} />
    </div>
  );
}
