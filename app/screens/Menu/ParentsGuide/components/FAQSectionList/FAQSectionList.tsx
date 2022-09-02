import React, { useCallback, useEffect, useState } from 'react';
import {
  SectionList,
  SectionListData,
  SectionListRenderItem,
} from 'react-native';
import _ from 'lodash';

import { styles } from './FAQSectionList.styles';
import {
  getLocalisedSectionMenuItems,
  IMenuItem,
  ISectionData,
} from './FAQSectionList.data';
import { IFAQSectionListProps } from './FAQSectionList.props';
import { usePrevious } from '../../../../../hooks';
import { ExtendedText } from '../../../../../components';

export const FAQSectionList: React.FC<IFAQSectionListProps> = ({
  filterValue,
}) => {
  const [initialSections] = useState(getLocalisedSectionMenuItems());
  const [filteredSections, setFilteredSections] = useState(initialSections);

  const prevFilterValue = usePrevious(filterValue);

  // Filter sections by filterValue prop
  useEffect(() => {
    if (prevFilterValue && !filterValue) {
      // Return the state to the initial sections
      setFilteredSections(initialSections);
    }

    if (filterValue) {
      // Filter all sections by the new filterValue
      const newFilteredSections: ISectionData[] = [];

      _.forEach(initialSections, ({ data, title }) => {
        const newFilteredSection: ISectionData = {
          title,
          data: _.filter(data, section =>
            section.title.includes(filterValue.toLowerCase()),
          ),
        };

        if (newFilteredSection.data.length) {
          newFilteredSections.push(newFilteredSection);
        }
      });

      setFilteredSections(newFilteredSections);
    }
  }, [filterValue, prevFilterValue, initialSections]);

  const renderSectionHeader = useCallback(
    ({ section }: { section: SectionListData<IMenuItem, ISectionData> }) => {
      return <ExtendedText>{section.title}</ExtendedText>;
    },
    [],
  );

  const renderItem: SectionListRenderItem<IMenuItem, ISectionData> =
    useCallback(({ item }) => {
      return <ExtendedText>{item.title}</ExtendedText>;
    }, []);

  return (
    <SectionList
      sections={filteredSections}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      style={styles.container}
    />
  );
};
