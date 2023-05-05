'use client'

import { Flex, Heading, Text, Link, Box, Grid } from '@chakra-ui/react'
import { HistoryItem } from '@/components/HistoryItem'
import { PropsWithChildren } from 'react'

const Tag: React.FC<PropsWithChildren> = ({ children }) => (
  <Box as="span" fontSize="xs" mt="auto" color="orange.700" ml="2">
    ({children})
  </Box>
)

export default function Home() {
  return (
    <Flex as="main" direction="column" maxW="1240px" mx="auto">
      <Flex direction="column" textAlign="center" pb={6}>
        <Heading as="h3" fontSize="xl">
          徐梓杰，Frontend Engineer
        </Heading>
        <Box mt={2}>
          <Link href="mailto:j893412899@outlook.com">
            Email: j893412899@outlook.com
          </Link>
        </Box>
        <Box mt={2}>
          <Link href="mailto:j893412899@outlook.com">
            Github: https://github.com/Vibes-INS
          </Link>
        </Box>
      </Flex>
      <Grid
        templateColumns="200px calc(100% - 200px)"
        borderTop="1px solid"
        borderColor="gray.200"
        py={4}
      >
        <Flex textTransform="uppercase" w="200px" fontWeight={700}>
          Profile
        </Flex>
        <Flex>
          四年工作经验的前端开发工程师，具有丰富的从 0 到 1
          的产品经验。对产品质量、效果、代码可读性、代码性能等非常注重。有多个从
          0 到 1 的产品开发经验。熟悉面向对象编程，Javascript
          函数式编程。熟悉基本数据结构与算法。 熟悉
          Typescript，Angular，React，Rxjs 等技术，了解 Rust 的用法。
        </Flex>
      </Grid>
      <Flex
        direction="column"
        borderTop="1px solid"
        borderColor="gray.200"
        py={4}
      >
        <Flex textTransform="uppercase" w="full" fontWeight={700}>
          Employment History
        </Flex>
        <HistoryItem
          startTime="Jul 2021"
          title="Frontend Engineer"
          subtitle="Nervina Labs"
          timeProps={{ fontWeight: 500 }}
        />
        <Flex direction="column">
          <HistoryItem
            startTime="Nov 2022"
            title={
              <>
                JoyID <Tag>React + Typescript + Jotai + RxJS + ChakraUI</Tag>
              </>
            }
            icon="https://app.joyid.dev/logo.svg"
            timeProps={{ fontSize: 'sm' }}
            link="https://joy.id"
            description={
              <>
                Nervos Network 旗下的抽象钱包，使用 Webauthn
                技术实现无密码、无助记词。
                <br />
                前端开发，参与官网开发，参与 NFT 展示， 参与通用 UI
                组件开发，参与添加多设备开发，以及多个功能的开发。
              </>
            }
          />
          <HistoryItem
            startTime="Mar 2022"
            title={
              <>
                Mail3 <Tag>React + Typescript + Jotai + RxJS + ChakraUI</Tag>
              </>
            }
            icon="https://mail3.me/icons/icon-192x192.png"
            timeProps={{ fontSize: 'sm' }}
            link="https://mail3.me"
            description={
              <>
                区块链邮箱，支持多链。 开发。
                <br />
                前端核心开发。曾开发了邮件富文本编辑器、浏览器推送、官网及动效、邮件内容展示、使用钱包登录、上传
                IPFS 、创作者后台等功能。
              </>
            }
          />
          <HistoryItem
            startTime="Aug 2021"
            endTime="Mar 2022"
            title={
              <>
                秘宝创作中心（NFTBox）
                <br />
                <Tag>React + Typescript + RxJS + TailwindCSS</Tag>
              </>
            }
            icon="https://nftbox.me/favicon.ico"
            timeProps={{ fontSize: 'sm' }}
            link="https://nftbox.me"
            description={
              <>
                Nervos Network 旗下的 NFT 创作的平台，包含分发 NFT、创建 NFT
                红包、NFT 套装、NFT 专辑等功能。
                <br />
                前端负责人，负责项目日常维护。
              </>
            }
          />
          <HistoryItem
            startTime="Aug 2021"
            endTime="Mar 2022"
            title={
              <>
                秘宝浏览器 （Token.City Explorer）
                <Tag>React + Typescript + RxJS</Tag>
              </>
            }
            icon="https://token.city/64.png"
            timeProps={{ fontSize: 'sm' }}
            link="https://explorer.token.city"
            description={
              <>
                Nervos Network 旗下的 NFT 浏览器，可用于查看 NFT
                的转账、分发、预览等。
                <br />
                前端负责人，负责项目前端开发以及日常维护。
              </>
            }
          />
          <HistoryItem
            startTime="Aug 2021"
            endTime="Mar 2022"
            title={
              <>
                秘宝账户（Token.City）
                <Tag>React + Typescript + Jotai + RxJS + ChakraUI</Tag>
              </>
            }
            icon="https://token.city/64.png"
            timeProps={{ fontSize: 'sm' }}
            link="https://token.city"
            description={
              <>
                Nervos Network 旗下的 NFT 钱包。
                <br />
                前端核心开发，开发领取 NFT 红包、播放 NFT 音乐专辑、播放 3D
                模型、首页推荐、NFT 详情展示、NFT 套装等功能。
              </>
            }
          />
        </Flex>
        <HistoryItem
          startTime="Jul 2019"
          endTime="Jul 2021"
          title="Javascript Full Stack Engineer"
          subtitle="Maimemo Inc."
          timeProps={{ fontWeight: 500 }}
          mt="150px"
        />
        <Flex direction="column">
          <HistoryItem
            startTime="Dec 2020"
            endTime="Jul 2021"
            title="墨墨生词本"
            icon="https://maimemo.com/res/style/site/default/css/images/favicon.ico"
            link="https://apps.apple.com/cn/app/墨墨生词本/id1547960562"
            timeProps={{ fontSize: 'sm' }}
            description={
              <>
                墨墨背单词旗下一款 PDF
                生成器，根据用户输入的单词生成出复杂的字典排版的 PDF。App Store
                付费 App，曾霸榜教育付费榜第一名数月。
                <br />
                在项目中担任后端负责人和排版算法工程师。项目是使用 Egg.js +
                Typescript 开发，在性能优化中，使用 Rust 编译 Webassembly
                解决性能敏感的场景
                <br />
                项目难点：排版算法、性能优化。
              </>
            }
          />
          <HistoryItem
            startTime="Aug 2019"
            endTime="Jul 2021"
            title="墨墨背单词系列书籍出版"
            icon="https://maimemo.com/res/style/site/default/css/images/favicon.ico"
            timeProps={{ fontSize: 'sm' }}
            description={
              <>
                墨墨背单词旗下出版的实体书，使用 H5
                技术对词书内容进行排版，排版要求需达到实体书书籍出版的要求。
                <br />
                合作出版社有：浙江教育出版社、时代云图。
                <br />
                在项目中担任技术负责人，使用 Angular
                开发了编辑的平台，排版算法使用 Typescript 开发。
              </>
            }
          />
          <HistoryItem
            startTime="Aug 2020"
            endTime="Jul 2021"
            title="Markji"
            icon="https://www.markji.com/assets/images/markji-logo.jpg"
            link="https://markji.com"
            timeProps={{ fontSize: 'sm' }}
            description={
              <>
                墨墨背单词旗下记忆软件，类似 Anki。
                <br />
                项目初期曾担任网站设计师、前端开发、后端开发。
                <br />
                参与后端用户模块、支付模块、文件模块等模块的开发。
                <br />
                参与官网的交互设计，以及前端架构设计。
                <br />
                参与管理后台的 UI 设计及需求分析及前端架构和开发。
                <br />
                前端技术栈：Angular + Typescript + RxJS
                <br />
                后端技术栈：EggJS + MongoDB + Typescript
              </>
            }
          />
          <HistoryItem
            startTime="Oct 2019"
            endTime="May 2020"
            title={
              <>
                词汇量测试 <Tag>Angular + Typescript + RxJS + Echart</Tag>
              </>
            }
            icon="https://maimemo.com/res/style/site/default/css/images/favicon.ico"
            link="https://www.maimemo.com/home/voc_test"
            timeProps={{ fontSize: 'sm' }}
            description={
              <>
                墨墨背单词旗下产品词汇量测试
                <br />
                前端负责人，项目中大量使用动效，且适应移动端。
                <br />
                使用技术：Angular、Rxjs、Typescript、Echart。
              </>
            }
          />
        </Flex>
      </Flex>
      <Flex
        direction="column"
        borderTop="1px solid"
        borderColor="gray.200"
        py={4}
      >
        <Flex textTransform="uppercase" w="full" fontWeight={700}>
          Projects
        </Flex>
        <HistoryItem
          startTime="May 2022"
          endTime="Jul 2022"
          title={
            <>
              SEEDAO 官网 V3 <Tag>Remix + RxJS</Tag>
            </>
          }
          link="https://github.com/SeeDAO-OpenSource/seedao-frontend-v3"
          description={<>去中心化组织 SEEDAO 的官网，包含大量动态效果。</>}
        />
      </Flex>
      <Flex
        direction="column"
        borderTop="1px solid"
        borderColor="gray.200"
        py={4}
      >
        <Flex textTransform="uppercase" w="full" fontWeight={700}>
          Licenses & certifications
        </Flex>
        <HistoryItem
          startTime="Nov 2018"
          endTime="Apr 2019"
          title="软件设计师"
          subtitle="中华人民共和国人力资源和社会保障局"
          link="https://query.ruankao.org.cn/certificate"
          description={<>Credential ID 2018215441805486</>}
        />
      </Flex>
    </Flex>
  )
}
