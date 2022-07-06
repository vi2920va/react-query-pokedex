import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { usePokemonQueries } from "../../hooks/usePokemonQuery";

type Params = {
  id: string;
};

type Tab = "about" | "stats" | "evolution";

const DetailPage: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState<Tab>("about");
  const { id } = useParams<Params>();

  return <div>Detail Page id: {id}</div>;
};

export default DetailPage;
