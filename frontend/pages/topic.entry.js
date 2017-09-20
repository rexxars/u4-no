import React, { Component } from 'react';
import Link from 'next/link';
import sanityClient from '@sanity/client';
import DataLoader from '../helpers/data-loader';

import { Layout, ExtendedBlockContent, Accordion } from '../components';
import { DownArrowButton } from '../components/buttons';
import {
  Basics,
  Picture,
  Publication,
  Resources,
} from '../components/icons';

const TopicEntry = ({ topic: { title = '', longTitle = '', explainerText = 'Publication has no explainerText', featuredImage, parent = {}, introduction = [], agenda = [], advisors = [], resources = []  } = {} }) => (
  <Layout>
    <div className="o-wrapper">
      <p>
            Tilbake til {' '}
        <Link href={'/topics'}>
          <a>topics oversikt</a>
        </Link>
      </p>
      <h1 className="c-topic-page_title">{title}</h1>
      <h2 className="c-topic-page__longTitle u-margin-bottom">{longTitle}</h2>
      <div className="u-margin-bottom">
        <DownArrowButton text="Browse our resources" />
      </div>

      <section className="c-boxOnImage u-margin-bottom-huge">
        {
          featuredImage &&
            <figure className="c-boxOnImage__figure">
              <img alt={featuredImage.asset.altText} src={featuredImage.asset.url} />
            </figure>
        }
        <div className="c-boxOnImage__body">
          <p>{explainerText}</p>
          <ul>See also
            <li>Area 1 ></li>
            <li>Area 2 ></li>
            <li>Area 3 ></li>
          </ul>
          <DownArrowButton modifier="secondary" text="Talk to one our of advisors" onClick={() => console.log('clicked!')} />
        </div>
      </section>
      <section className="c-accordion-wrapper">

      </section>
    </div>
  </Layout>
);

export default DataLoader(TopicEntry, {
  queryFunc: ({ query: { id = '' } }) => ({
    sanityQuery: '{ "topic": *[_id == $id][0]}',
    projection: { id },
  }),
  materializeDepth: 2,
});
