"use client";
import axiosInstance from "@/app/_lib/axios";
import React from "react";
import { useEffect, useState } from "react";
import DOMPurify from "isomorphic-dompurify";

function TermsAndConditions() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get("info");
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container py-28">
      <p className="w-[75%] text-black text-[28px] mb-[2rem]">
        {DOMPurify.sanitize(data?.terms, {
          USE_PROFILES: { html: true },
        })}
      </p>
    </div>
  );
}

export default TermsAndConditions;
