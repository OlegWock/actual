import React, {
  type ComponentType,
  type MouseEventHandler,
  type SVGProps,
} from 'react';

// eslint-disable-next-line no-restricted-imports
import { type CSSProperties, colors } from '../../style';
import Block from '../common/Block';
import View from '../common/View';

import { accountNameStyle } from './Account';
import ItemContent from './ItemContent';

const fontWeight = 600;

type SecondaryItemProps = {
  title: string;
  to?: string;
  Icon?: ComponentType<SVGProps<SVGElement>>;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
  bold?: boolean;
  indent?: number;
};

function SecondaryItem({
  Icon,
  title,
  style,
  to,
  onClick,
  bold,
  indent = 0,
}: SecondaryItemProps) {
  const content = (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        height: 16,
      }}
    >
      {Icon && <Icon width={12} height={12} />}
      <Block style={{ marginLeft: Icon ? 8 : 0, color: 'inherit' }}>
        {title}
      </Block>
    </View>
  );

  return (
    <View style={{ flexShrink: 0, ...style }}>
      <ItemContent
        style={{
          ...accountNameStyle,
          color: colors.n9,
          paddingLeft: 14 + indent,
          fontWeight: bold ? fontWeight : null,
          ':hover': { backgroundColor: colors.n2 },
        }}
        to={to}
        onClick={onClick}
        activeStyle={{
          borderLeft: '4px solid ' + colors.p8,
          paddingLeft: 14 - 4 + indent,
          color: colors.p8,
          fontWeight: bold ? fontWeight : null,
        }}
      >
        {content}
      </ItemContent>
    </View>
  );
}

export default SecondaryItem;
