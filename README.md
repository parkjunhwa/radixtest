# Radix UI Dashboard

모든 Radix UI 컴포넌트 컬렉션 정의 - 박준화 수석

## 프로젝트 개요

이 프로젝트는 Radix UI 컴포넌트 라이브러리의 모든 컴포넌트를 한눈에 볼 수 있는 대시보드입니다. 각 컴포넌트의 다양한 상태와 사용 예시를 제공합니다.

## 기술 스택

- **Framework**: Next.js 16.0.1 (App Router)
- **React**: 19.2.0
- **UI Library**: Radix UI (모든 컴포넌트)
- **Styling**: Tailwind CSS v4
- **TypeScript**: 5.x
- **Date Picker**: react-day-picker
- **Date Utilities**: date-fns

## 주요 기능

- **50개 이상의 UI 컴포넌트 예시**
  - Accordion, Alert Dialog, Aspect Ratio, Avatar, Badge, Button, Callout, Checkbox, Collapsible, Context Menu, Dialog, Dropdown Menu, Hover Card, Label, Menubar, Navigation Menu, Popover, Progress, Radio Group, Scroll Area, Select, Separator, Slider, Switch, Tabs, Toast, Toggle, Tooltip 등

- **다크 모드 지원**
  - 라이트/다크/시스템 테마 전환
  - CSS 변수를 통한 테마 관리

- **반응형 Masonry 레이아웃**
  - 화면 크기에 따라 자동으로 컬럼 수 조정
  - 전체 폭 카드 지원

- **접근성 고려**
  - WAI-ARIA 표준 준수
  - 키보드 네비게이션 지원
  - 스크린 리더 호환

## 시작하기

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 결과를 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 프로젝트 구조

```text
app/
├── components/
│   ├── common/          # 공통 컴포넌트 (Card, Header)
│   └── ui-sections/     # UI 섹션별 컴포넌트
│       ├── AccordionSection.tsx
│       ├── AlertDialogSection.tsx
│       └── DatePickerSection.tsx
├── globals.css          # 전역 스타일 및 Tailwind 설정
├── layout.tsx           # 루트 레이아웃
└── page.tsx             # 메인 대시보드 페이지
```

## 주요 컴포넌트

### Form Components

- Text Field (다양한 상태: 기본, 에러, 성공, readonly, disabled)
- Text Area (readonly, disabled)
- Select (disabled)
- Checkbox, Radio Group
- Date Picker, DateTime Picker, Date Range Picker
- Autocomplete, Multi Autocomplete
- Slider, Switch

### Overlay Components

- Dialog (기본, 큰 모달, 전체 화면, 스크롤 가능)
- Alert Dialog
- Popover
- Tooltip
- Hover Card
- Context Menu
- Dropdown Menu

### Layout Components

- Accordion
- Collapsible
- Tabs
- Separator
- Scroll Area
- Navigation Menu
- Menubar

### Feedback Components

- Toast
- Progress
- Skeleton
- Spinner
- Callout
- Badge

### 기타

- Avatar
- Aspect Ratio
- Table
- Typography
- Data List
- Icon Library
- Color Palette

## 커스터마이징

### 테마 색상

`app/globals.css`에서 CSS 변수를 통해 테마 색상을 커스터마이징할 수 있습니다:

```css
:root {
  --background: #ffffff;
  --foreground: #111827;
  --text-primary: #111827;
  --text-secondary: #4B5563;
}
```

### Tailwind 설정

`tailwind.config.cjs`에서 Tailwind CSS 설정을 수정할 수 있습니다. 현재 커스텀 grid 컬럼(16, 24, 32, 40)이 설정되어 있습니다.

## 참고 자료

- [Radix UI 공식 문서](https://www.radix-ui.com/)
- [Next.js 문서](https://nextjs.org/docs)
- [Tailwind CSS 문서](https://tailwindcss.com/docs)

## 라이선스

이 프로젝트는 개인 프로젝트입니다.
