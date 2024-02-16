"use client"
import React, { useState, useEffect } from 'react';
import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
} from '@ionic/react';

const FEED: React.FC = () => {
  const [items, setItems] = useState<string[]>([]); // State is already correctly typed as an array of strings

  const generateItems = (): void => { // Specify that this function doesn't return anything
    const newItems: string[] = []; // Explicitly declare the type of newItems
    for (let i = 0; i < 50; i++) {
      newItems.push(`Item ${1 + items.length + i}`);
    }
    setItems([...items, ...newItems]);
  };

  useEffect(() => {
    generateItems();
  }, []); // Removed eslint-disable-line for clarity, consider handling dependencies correctly in TypeScript

  return (
    <IonContent>
      <IonList>
        {items.map((item, index) => (
          <IonItem key={item}>
            <IonAvatar slot="start">
              <img src={`https://picsum.photos/80/80?random=${index}`} alt="avatar" />
            </IonAvatar>
            <IonLabel>{item}</IonLabel>
          </IonItem>
        ))}
      </IonList>
      <IonInfiniteScroll onIonInfinite={(ev: CustomEvent<void>) => { // Typing the event parameter
          generateItems();
          setTimeout(() => (ev.target as HTMLIonInfiniteScrollElement).complete(), 500); // Cast the event target to the correct type
        }}
      >
        <IonInfiniteScrollContent></IonInfiniteScrollContent>
      </IonInfiniteScroll>
    </IonContent>
  );
}

export default FEED;
