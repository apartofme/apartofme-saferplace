import React, { useCallback, useEffect, useState } from 'react';
import {
  SectionList,
  SectionListData,
  SectionListRenderItem,
  View,
} from 'react-native';
import _ from 'lodash';

import { styles } from './FAQSectionList.styles';
import {
  getLocalisedSectionMenuItems,
  IMenuItem,
  ISectionData,
} from './FAQSectionList.data';
import { IFAQSectionListProps } from './FAQSectionList.types';
import { usePrevious } from '../../../../../hooks';
import { ExtendedText } from '../../../../../components';
import { SVG_ICONS } from '../../../../../assets/svg';

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
      return (
        <ExtendedText style={styles.sectionTitle} preset="body-bold">
          {section.title}
        </ExtendedText>
      );
    },
    [],
  );

  const OrangeCirclePlussIcon = SVG_ICONS.orangeCirclePlussIcon;

  const renderItem: SectionListRenderItem<IMenuItem, ISectionData> =
    useCallback(
      ({ item }) => {
        return (
          <View style={styles.sectionListItemContainer}>
            <ExtendedText
              style={styles.sectionListItemTitle}
              preset="secondary-text">
              {item.title}
            </ExtendedText>
            <OrangeCirclePlussIcon />
          </View>
        );
      },
      [OrangeCirclePlussIcon],
    );

  return (
    <SectionList
      sections={filteredSections}
      renderSectionHeader={renderSectionHeader}
      renderItem={renderItem}
      style={styles.container}
    />
  );
};
