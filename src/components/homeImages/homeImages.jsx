'use client';
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from './homeImages.module.scss';
import Link from 'next/link';

const ResponsiveMasonry = () => {
  const [columns, setColumns] = useState(5);
  const gridRef = useRef(null);
  const [showSavedPopup, setShowSavedPopup] = useState(false);
  const popupRef = useRef(null);

  const darkColors = [
    '#1a1a2e', '#16213e', '#0f3460', '#533e2d', '#3d2c2e'
  ];

  const getRandomDarkColor = () => {
    return darkColors[Math.floor(Math.random() * darkColors.length)];
  };

  const [images, setImages] = useState([
    { id: 1, src: '/images/profileImage/chaechae1.jpg', isSaved: false },
    { id: 2, src: '/images/002-016.jpg', isSaved: false },
    { id: 3, src: '/images/02.jpg', isSaved: false },
    { id: 4, src: '/images/a silent voice.jpg', isSaved: false },
    { id: 5, src: '/images/kimi no nava.jpg', isSaved: false },
    { id: 6, src: '/images/kitagawa.jpg', isSaved: false },
    { id: 7, src: '/images/rezero.jpg', isSaved: false },
    { id: 8, src: '/images/wallpaper-2.jpg', isSaved: false },
    { id: 9, src: '/images/profileImage/chaechae1.jpg', isSaved: false },
    { id: 10, src: '/images/002-016.jpg', isSaved: false },
    { id: 11, src: '/images/02.jpg', isSaved: false },
    { id: 12, src: '/images/a silent voice.jpg', isSaved: false },
    { id: 13, src: '/images/kimi no nava.jpg', isSaved: false },
    { id: 14, src: '/images/kitagawa.jpg', isSaved: false },
    { id: 15, src: '/images/rezero.jpg', isSaved: false },
    { id: 16, src: '/images/wallpaper-2.jpg', isSaved: false },
    { id: 17, src: '/images/profileImage/chaechae1.jpg', isSaved: false },
    { id: 18, src: '/images/002-016.jpg', isSaved: false },
    { id: 19, src: '/images/02.jpg', isSaved: false },
    { id: 20, src: '/images/a silent voice.jpg', isSaved: false },
    { id: 21, src: '/images/kimi no nava.jpg', isSaved: false },
    { id: 22, src: '/images/kitagawa.jpg', isSaved: false },
    { id: 23, src: '/images/rezero.jpg', isSaved: false },
    { id: 24, src: '/images/wallpaper-2.jpg', isSaved: false },
  ]);

  useEffect(() => {
    const calculateColumns = () => {
      if (!gridRef.current) return;
      const width = window.innerWidth;
      let newColumns;

      if (width >= 2800) newColumns = 11;
      else if (width >= 2400) newColumns = 10;
      else if (width >= 2000) newColumns = 9;
      else if (width >= 1600) newColumns = 8;
      else if (width >= 1400) newColumns = 7;
      else if (width >= 1200) newColumns = 6;
      else if (width >= 992) newColumns = 5;
      else if (width >= 768) newColumns = 4;
      else if (width >= 576) newColumns = 3;
      else newColumns = 2;

      setColumns(newColumns);
    };

    const calculateLayout = () => {
      if (!gridRef.current || !columns) return;
      const containerWidth = gridRef.current.offsetWidth;
      const gap = 15;
      const columnWidth = (containerWidth - (gap * (columns - 1))) / columns;

      const columnHeights = Array(columns).fill(0);
      const items = gridRef.current.querySelectorAll(`.${styles.masonryItem}`);

      items.forEach((item, index) => {
        const columnIndex = index % columns;
        item.style.position = 'absolute';
        item.style.width = `${columnWidth}px`;
        item.style.left = `${columnIndex * (columnWidth + gap)}px`;
        item.style.top = `${columnHeights[columnIndex]}px`;

        const img = item.querySelector('img');
        if (img && img.complete) {
          const aspectRatio = img.naturalHeight / img.naturalWidth;
          const itemHeight = columnWidth * aspectRatio;
          columnHeights[columnIndex] += itemHeight + gap;
        }
      });

      gridRef.current.style.height = `${Math.max(...columnHeights)}px`;
    };

    calculateColumns();
    calculateLayout();

    const handleResize = () => {
      calculateColumns();
      calculateLayout();
    };

    window.addEventListener('resize', handleResize);
    const imgLoadHandler = () => calculateLayout();
    const images = gridRef.current?.querySelectorAll('img') || [];

    images.forEach(img => {
      if (img.complete) imgLoadHandler();
      else img.addEventListener('load', imgLoadHandler);
    });

    return () => {
      window.removeEventListener('resize', handleResize);
      images.forEach(img => img.removeEventListener('load', imgLoadHandler));
    };
  }, [columns, images]);

  const handleSave = (id) => {
    setImages(prevImages => {
      const updatedImages = prevImages.map(image => {
        if (image.id === id) {
          // Faqat yangi saqlangan holatda popup ko'rsatish
          if (!image.isSaved) {
            setShowSavedPopup(true);
            setTimeout(() => setShowSavedPopup(false), 3000);
          }
          return { ...image, isSaved: true };
        }
        return image;
      });
      return updatedImages;
    });
  };

  return (
    <div className={styles.galleryContainer}>
      <div ref={gridRef} className={styles.masonryGrid}>
        {images.map((image) => (
          <div
            key={`${image.id}-${Math.random()}`}
            className={styles.masonryItem}
            style={{ backgroundColor: getRandomDarkColor() }}
          >
            <div className={styles.imageWrapper}>
              <div
                className={`${styles.saved} ${image.isSaved ? styles.active : ""}`}
                onClick={() => handleSave(image.id)}
              >
                {image.isSaved ? "Saved" : "Save"}
              </div>
              <Image
                src={image.src}
                alt={`Image ${image.id}`}
                width={500}
                height={500}
                className={styles.image}
                onLoadingComplete={() => {
                  const event = new Event('resize');
                  window.dispatchEvent(event);
                }}
              />
              <div className={styles.tools}>
                <div className={styles.edit}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style={{ fill: 'rgba(0, 0, 0, 1)', transform: '', msFilter: '' }}
                  >
                    <path d="M8.707 19.707 18 10.414 13.586 6l-9.293 9.293a1.003 1.003 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263zM21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586 19.414 9 21 7.414z"></path>
                  </svg>
                </div>
                <div className="upload">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    height="24"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <g
                      stroke="#141414"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    >
                      <path d="m4.75 14.75v1.5c0 1.6569 1.34315 3 3 3h8.5c1.6569 0 3-1.3431 3-3v-1.5" />
                      <path d="m12 14.25v-9.25" />
                      <path d="m8.75 8.25 3.25-3.5 3.25 3.5" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div 
        ref={popupRef}
        className={`${styles.savedPopup} ${showSavedPopup ? styles.active : ''}`}
      >
        <div className={styles.icon}>
          <svg aria-label="Миниатюра: сохранено в профиле" className="AR6 gUZ U9O kVc" height="24" role="img" viewBox="0 0 24 24" width="24">
            <path d="M13.25 8v3.48l2.38 2.39a1.25 1.25 0 0 1-1.76 1.76l-3.12-3.11V8a1.25 1.25 0 0 1 2.5 0M23 12a11.01 11.01 0 0 1-21.86 1.74 1.5 1.5 0 0 1 2.96-.47A8 8 0 1 0 12 4c-2.22 0-4.3.94-5.78 2.5H7a1.5 1.5 0 1 1 0 3H1V4a1.5 1.5 0 1 1 3 0v.47A11.01 11.01 0 0 1 23 12"></path>
          </svg>
        </div>
        <div className={styles.text}>
          Saved: <Link href="/profile">Profile</Link>
        </div>
        <div className={styles.editPin}>
          <button>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResponsiveMasonry;