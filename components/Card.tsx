import React from 'react';
import { Card, Text, Box, Image, Group, Badge, Button, ActionIcon, Title, Flex } from '@mantine/core';
import classes from './card.module.css';
import { useMediaQuery } from '@mantine/hooks';

interface BadgeCardProps {
  image?: string;
  heading?: string;
  subheading?: string;
  paragraph?: string;
  badge?: string;
  tags?: string[];
  style?: React.CSSProperties;
  button?: {
    color?: string;
    backgroundColor?: string;
    text?: string;
    onClick?: () => void;
    border?: string;
  };
  button2?: {
    color?: string;
    backgroundColor?: string;
    text?: string;
    onClick?: () => void;
    border?: string;
  };
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  leftIconClick?: () => void;
  rightIconClick?: () => void;
}

const BadgeCard: React.FC<BadgeCardProps> = ({
  image,
  heading,
  subheading,
  paragraph,
  badge,
  tags,
  style,
  button,
  button2,
  leftIcon,
  rightIcon,
  leftIconClick,
  rightIconClick,
}) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <Card withBorder radius="md" p="md" className={classes.card} style={style}>
    {image && (
    <Card.Section>
          <Box >
            <Image src={image} h={200} w="100%"/>
            </Box>
    </Card.Section>
  )}
      <Card.Section className={classes.section} mt="md">
          <Group justify="apart">
            {heading && <Title order={3}>{heading}</Title>}
            {subheading && <Text size="sm" color="dimmed">{subheading}</Text>}
            {badge && <Badge size="md" variant="light" color="yellow">{badge}</Badge>}
          </Group>
      </Card.Section>

      {paragraph && (
        <Text size="sm" mt="xs">
          {paragraph}
        </Text>
      )}

      {tags && (
        <Card.Section className={classes.section} style={{paddingTop:'10px'}}>
          <Group gap={7} mt={5}>
            {tags.map((tag, index) => (
              <Badge key={index} variant="light" color="gray">
                {tag}
              </Badge>
            ))}
          </Group>
        </Card.Section>
      )}

      <Group mt="md">
      <Flex w="100%">
        {leftIcon && (
          <ActionIcon variant="default" radius="md" size={36} onClick={leftIconClick}>
            {leftIcon}
          </ActionIcon>
        )}
        {button && (
          <Button
            w="100%"
            onClick={button.onClick}
            style={{
              color: button.color,
              backgroundColor: button.backgroundColor,
              border: button.border,
              marginRight: button2 ? '8px' : 0,
            }}
          >
            {button.text}
          </Button>
        )}
        {button2 && (
          <Button
            w="100%"
            onClick={button2.onClick}
            style={{
              color: button2.color,
              backgroundColor: button2.backgroundColor,
              border: button2.border,
            }}
          >
            {button2.text}
          </Button>
        )}
        {rightIcon && (
          <ActionIcon variant="default" radius="md" size={36} onClick={rightIconClick}>
            {rightIcon}
          </ActionIcon>
        )}
        </Flex>
      </Group>
    </Card>
  );
};

export default BadgeCard;
