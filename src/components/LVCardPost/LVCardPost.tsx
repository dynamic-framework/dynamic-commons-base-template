import type { HTMLAttributes } from 'react';

import './lv-card-post.css';
import { DIcon } from '@dynamic-framework/ui-react';

export interface LVCardPostProps extends Omit<HTMLAttributes<HTMLElement>, 'title'> {
  imageSrc?: string;
  imageAlt?: string;
  category?: string;
  title?: string;
  publishDate?: string;
  readTime?: string;
  views?: number | string;
}

export function LVCardPost({
  imageSrc,
  imageAlt = 'Post image',
  category = 'Artículos',
  title = 'Los escenarios que se abren para el petróleo con el acuerdo en Medio Oriente',
  publishDate = '17/06/2026',
  readTime = '4 Min',
  views = 54,
  className,
  ...props
}: LVCardPostProps) {
  const resolvedClassName = ['bg-white shadow-sm lv-card-post', className].filter(Boolean).join(' ');

  return (
    <article className={resolvedClassName} {...props}>
      {imageSrc ? (
        <img src={imageSrc} alt={imageAlt} className="lv-card-post__image" loading="lazy" />
      ) : (
        <div className="lv-card-post__image-placeholder" aria-hidden="true" />
      )}

      <div className="lv-card-post__content">
        <p className="lv-card-post__category">
          <DIcon icon="Book" />
          <span>{category}</span>
        </p>

        <h3 className="lv-card-post__title">{title}</h3>

        <div className="text-muted lv-card-post__meta">
          <p className="lv-card-post__meta-item">
            <DIcon icon="Calendar" />
            <span>{publishDate}</span>
          </p>

          <p className="lv-card-post__meta-item">
            <DIcon icon="Clock" />
            <span>{readTime}</span>
          </p>

          <p className="lv-card-post__meta-item">
            <DIcon icon="Eye" />
            <span>{views}</span>
          </p>
        </div>
      </div>
    </article>
  );
}

LVCardPost.displayName = 'LVCardPost';
