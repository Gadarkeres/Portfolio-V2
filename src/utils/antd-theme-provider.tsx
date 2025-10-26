'use client'
import { ConfigProvider, theme as antdTheme } from 'antd'
import { useTheme } from './theme-context'

export default function AntdThemeProvider({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme()

  return (
    <ConfigProvider
      theme={{
        algorithm: theme === 'dark' ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        token: {
          colorBgContainer: theme === 'dark' ? '#1f1f1f' : '#fff',
          colorText: theme === 'dark' ? '#fff' : '#000',
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}
