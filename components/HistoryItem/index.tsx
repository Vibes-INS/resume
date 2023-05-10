import {
  Box,
  Flex,
  FlexProps,
  Grid,
  GridProps,
  Heading,
  Image,
  Link,
} from '@chakra-ui/react'
import { ReactNode } from 'react'
import dayjs from 'dayjs'
import { LinkIcon } from '@chakra-ui/icons'

export interface HistoryItemProps extends Omit<GridProps, 'title'> {
  startTime: Date | string
  endTime?: Date | string
  title: ReactNode
  subtitle?: ReactNode
  description?: ReactNode
  icon?: string
  timeProps?: FlexProps
  link?: string
}

export const HistoryItem: React.FC<HistoryItemProps> = ({
  startTime,
  endTime,
  description,
  title,
  subtitle,
  icon,
  timeProps,
  link,
  ...props
}) => {
  return (
    <Grid
      templateColumns="200px calc(100% - 200px)"
      pt={2}
      {...props}
      sx={{
        pageBreakAfter: 'auto',
        pageBreakInside: 'avoid',
        ...props.sx,
      }}
    >
      <Flex {...timeProps}>
        {dayjs(startTime).format(' MMM YYYY')} -{' '}
        {endTime ? dayjs(endTime).format(' MMM YYYY') : 'Present'}
      </Flex>
      <Flex direction="column">
        <Heading as="h4" fontSize="md" display="flex">
          {icon ? (
            <Image
              src={icon}
              alt=""
              w="16px"
              h="16px"
              mr="2"
              display="inline"
              my="auto"
            />
          ) : null}
          {title}
          {link ? (
            <Link href={link} target="_blank">
              <LinkIcon w="16px" h="16px" ml="2" />
            </Link>
          ) : null}
        </Heading>
        {subtitle ? (
          <Heading as="h5" fontSize="sm" mt={1}>
            {subtitle}
          </Heading>
        ) : null}
        {description ? (
          <Box mt={2} whiteSpace="pre-line" fontSize="sm">
            {description}
          </Box>
        ) : null}
      </Flex>
    </Grid>
  )
}
