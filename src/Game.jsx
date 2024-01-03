import Card from "./Card";
import { v4 as uuid } from "uuid";
import { useEffect, useState } from "react";

const cardsInfo = [
  {
    key: uuid(),
    description: 'cat'
  },
  {
    key: uuid(),
    description: 'dog'
  }
];

export default function Game() {

  return (
    <>
      <Card description='test' imageSrc='/vite.svg' />
    </>
  )
}