"use client";
import Card from "@/components/Card";
import Skelton from "@/components/Skelton";
import React, { Suspense, useEffect, useState } from "react";

const HomePage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const intervalId = setTimeout(() => {
      setLoading(false);
    }, 500);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="h-screen flex justify-center items-center ">
      {loading ? <Skelton /> : <Card />}

      {/* <Suspense fallback={<Skelton />}>
        <Card />
      </Suspense> */}
    </div>
  );
};

export default HomePage;
