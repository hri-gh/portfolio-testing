"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./infinite-moving-cards";
import { useCertificates } from "@/hooks/get-certificates";

export function InfiniteCertificateMovingCards() {

  const [data, error, loading] = useCertificates()


  return (
    <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">

      <InfiniteMovingCards
        items={data}
        direction="right"
        speed="normal"
      />
    </div>
  );
}
