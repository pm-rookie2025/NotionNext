import { getGlobalData } from '@/lib/db/getSiteData'
import { siteConfig } from '@/lib/config'
import BLOG from '@/blog.config'
import { getBaseLayoutByTheme } from '@/themes/theme'
import { useMemo } from 'react'
import Image from 'next/image' // 导入 Next.js 的 Image 组件以优化图片

/**
 * 自定义的 About 页面组件
 * @param {*} props 包含全局数据的 props
 * @returns {JSX.Element}
 */
const CustomAboutPage = (props) => {
  // 从 props 或全局配置获取信息（如果需要动态化的话）
  // const { siteInfo } = props // 假设全局数据中有 siteInfo
  const author = siteConfig('AUTHOR') // 获取作者名

  // 示例标签数据 (实际应用中可能需要从别处获取或硬编码)
  const tags = [
    { text: '数码科技爱好者', icon: '🤖️' },
    { text: '分享与热心帮助', icon: '🔍' },
    { text: '智能家居小能手', icon: '🏠' },
    { text: '设计开发一条龙', icon: '🔨' },
    { text: '专修交互与设计', icon: '🤝' },
    { text: '脚踏实地行动派', icon: '🏃' },
    { text: '团队小组发动机', icon: '🧱' },
    { text: '壮汉人狠话不多', icon: '💢' }
  ]

  // 示例技能数据
  const skills = [
    { name: 'React', icon: '/path/to/react-icon.svg' }, // 请替换为实际图标路径
    { name: 'Next.js', icon: '/path/to/nextjs-icon.svg' },
    { name: 'Tailwind', icon: '/path/to/tailwind-icon.svg' },
    { name: 'JavaScript', icon: '/path/to/js-icon.svg' },
    { name: 'TypeScript', icon: '/path/to/ts-icon.svg' },
    { name: 'HTML', icon: '/path/to/html-icon.svg' },
    { name: 'CSS', icon: '/path/to/css-icon.svg' },
    { name: 'Node.js', icon: '/path/to/nodejs-icon.svg' }
    // ... 更多技能
  ]

  return (
    // 页面主容器，设置上下边距
    <div className="mt-8 mb-16 max-w-5xl mx-auto px-4">

      {/* 区域 3.1: 顶部标签云与头像区域 */}
      <div className="flex flex-col items-center mb-12">
        {/* 头像与标签云容器 */}
        <div className="relative flex justify-center items-center mb-6 w-[200px] h-[200px] md:w-[250px] md:h-[250px]">
           {/* 头像图片，再次强制使用默认头像 */}
          <Image
            src={'/avatar.png'} // 强制使用默认头像路径
            alt="Author Avatar"
            width={150} // 设定基础宽度
            height={150} // 设定基础高度
            className="rounded-full z-10 shadow-md w-[120px] h-[120px] md:w-[150px] md:h-[150px]" // 实际显示尺寸通过 className 控制
          />
          {/* 标签云 - 简易实现，围绕分布较复杂，这里先放在周围 */}
          {/* 注意：真正的环绕效果需要更复杂的 CSS 或 JS */}
          <div className="absolute inset-0 flex flex-wrap justify-center items-center opacity-80 -z-0">
             {/* 渲染标签 */}
            {tags.slice(0, 6).map((tag, index) => ( // 仅显示部分标签作示例
              <span
                key={index}
                className="m-1 md:m-2 inline-flex items-center bg-gray-100 dark:bg-gray-700 rounded-full px-3 py-1 text-xs md:text-sm font-medium text-gray-600 dark:text-gray-300 shadow-sm hover:scale-105 transition-transform duration-200"
                // 简单的绝对定位示例 (效果不佳，仅示意)
                // style={{
                //   position: 'absolute',
                //   top: `${50 + 45 * Math.sin(index * Math.PI / 3)}%`,
                //   left: `${50 + 45 * Math.cos(index * Math.PI / 3)}%`,
                //   transform: 'translate(-50%, -50%)'
                // }}
              >
                {tag.icon && <span className="mr-1.5">{tag.icon}</span>} {/* 标签图标 */}
                {tag.text} {/* 标签文字 */}
              </span>
            ))}
          </div>
        </div>
         {/* 区域标题 */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2 text-center">关于本站</h2>
         {/* 区域副标题 */}
        <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 text-center">你好，很高兴认识你👋</p>
      </div>

      {/* 区域 3.2 & 3.3: 介绍卡片与追求卡片区域 (使用 Grid 布局) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12">
        {/* 区域 3.2: 蓝色渐变介绍卡片，占据两列 */}
        <div className="md:col-span-2 p-6 md:p-8 rounded-2xl shadow-lg bg-gradient-to-br from-indigo-500 to-blue-500 text-white dark:from-indigo-600 dark:to-blue-600">
           {/* 小标题 */}
          <p className="text-sm opacity-90 mb-4">你好，很高兴认识你👋</p>
           {/* 姓名 */}
          <h2 className="text-3xl md:text-4xl font-bold mb-2">我叫 {author}</h2>
           {/* 简介 */}
          <p className="text-base opacity-80 leading-relaxed">{siteConfig('BIO') || '这个人很懒，什么都没留下...'}</p> {/* 使用配置的 BIO */}
        </div>

        {/* 区域 3.3: 白色追求卡片，占据一列 */}
        <div className="p-6 md:p-8 rounded-2xl shadow-xl bg-white dark:bg-gray-800">
           {/* 小标题 */}
          <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-4">追求</p>
           {/* 主文字 */}
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-3">
            源于 <span className="text-green-500">热爱</span><br/>而去创造
          </h3>
           {/* 下方标签 */}
          <div className="flex space-x-3">
            <span className="text-sm text-gray-600 dark:text-gray-300">产品设计</span>
            <span className="text-sm text-gray-600 dark:text-gray-300">程序</span>
            <span className="text-sm text-gray-600 dark:text-gray-300">体验</span>
          </div>
        </div>
      </div>

      {/* 区域 3.4: 技能展示区域 */}
      <div className="mb-12">
        {/* 区域标题 */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-2 text-center">技能</h2>
        {/* 区域副标题 */}
        <p className="text-base md:text-lg text-gray-500 dark:text-gray-400 text-center mb-8">开启创造力</p>
         {/* 技能网格 */}
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            // 单个技能项
            <div key={index} className="flex flex-col items-center text-center group">
              {/* 技能图标 (占位符) */}
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200">
                {/* 实际应使用 Image 或 SVG */}
                <span className="text-xl font-bold text-gray-500">{skill.name.substring(0,1)}</span>
              </div>
              {/* 技能名称 */}
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">{skill.name}</p>
            </div>
          ))}
          {/* 更多技能提示 */}
           <div className="flex flex-col items-center text-center group">
              <div className="w-12 h-12 md:w-16 md:h-16 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg flex items-center justify-center mb-2 text-gray-400 dark:text-gray-500 group-hover:scale-110 transition-transform duration-200">
                ...
              </div>
              <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400">更多</p>
            </div>
        </div>
      </div>

      {/* 区域 3.5: 生涯/性格/爱好等信息卡片 (占位) */}
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
         {/* 卡片 1 */}
         <div className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800">
           <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">生涯</h3>
           <p className="text-gray-600 dark:text-gray-300">这里是关于生涯的描述...</p>
         </div>
         {/* 卡片 2 */}
         <div className="p-6 rounded-2xl shadow-lg bg-white dark:bg-gray-800">
           <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-gray-100">性格</h3>
           <p className="text-gray-600 dark:text-gray-300">这里是关于性格的描述 (例如 MBTI)...</p>
         </div>
         {/* 更多卡片... */}
       </div>

      {/* 区域 3.6: 心路历程/致谢等文本区域 (占位) */}
      <div className="prose dark:prose-invert max-w-none"> {/* 使用 prose 插件优化长文本样式 */}
        <h2 className="text-2xl md:text-3xl font-bold !mb-4">心路历程</h2>
        <p>
          这里是关于为什么建站、博客的目标等的详细文字描述...
          需要较长的段落内容填充。
        </p>
        <h2 className="text-2xl md:text-3xl font-bold !mt-10 !mb-4">致谢</h2>
        <p>
          感谢访问！这里可以放置打赏名单或其他致谢内容...
        </p>
      </div>

    </div>
  )
}

/**
 * 包装自定义页面，应用主题的基础布局 - 现在由 _app.js 处理
 */
const About = props => {
  // const theme = useMemo(() => {
  //     // 这里确保我们使用正确的主题布局 (heo)
  //     return NOTION_CONFIG?.THEME || BLOG.THEME || 'heo'
  // }, [props.NOTION_CONFIG]) // Corrected dependency

  // // 获取 heo 主题的基础布局组件 - 不再需要，_app 处理
  // const Layout = getBaseLayoutByTheme(theme)

  // 直接渲染自定义页面内容，基础布局由 _app.js 提供
  return <CustomAboutPage {...props} />
}

/**
 * SSG 获取全局数据，供基础布局使用
 * @returns {Promise<object>}
 */
export async function getStaticProps() {
  // 获取全局数据，包含站点信息、菜单等
  const props = await getGlobalData({ from: 'about' })
  // 这个页面不依赖特定的 Notion 页面内容，但布局可能需要全局数据
  delete props.post // 确保不传递可能冲突的 post 数据 (About 页面没有 post)
  return {
    props,
    // 设置页面的重新验证时间 (增量静态再生 ISR)
    revalidate: parseInt(siteConfig('NEXT_REVALIDATE_SECOND', null, props?.NOTION_CONFIG)) || parseInt(BLOG.NEXT_REVALIDATE_SECOND) || 60 // 默认 60 秒
  }
}

export default About 