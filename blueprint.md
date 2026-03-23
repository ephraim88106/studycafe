# Blueprint: WelfareFinder - 맞춤형 복지 정책 검색 서비스

## Overview
이 프로젝트는 사용자가 자신에게 맞는 복지 정책을 쉽고 빠르게 검색하고 확인할 수 있는 "맞춤형 복지 정책 검색 서비스(WelfareFinder)" 홈페이지입니다.
실제 정부 사이트(복지로, 정부24 등)로의 연결 기능을 추가하여 실무적인 도움을 제공하며, Firebase Hosting을 통해 배포 가능한 상태로 구축되었습니다.

## Project Details
- **Project ID:** test-06147957
- **Tech Stack:** Vanilla HTML, CSS, JavaScript (Modern Web Components)
- **Firebase Integration:** 
  - Client: Firebase SDK (Initialization)
  - Hosting: `firebase.json`, `.firebaserc` 설정 완료
- **Design Principles:** 
  - 신뢰감을 주는 블루/화이트 컬러 팔레트
  - 반응형 디자인(Container Queries, Flexbox/Grid)
  - 접근성(A11Y) 향상을 위한 시맨틱 태그 및 ARIA 속성 고려
  - 다크 모드 지원
  - 실제 정부 정책 상세 페이지 링크 연동

## Current Plan (실무화 및 배포 준비)
1. **실용성 강화:** 
   - 각 정책 카드에 실제 정부 공식 상세 페이지 링크 연동.
   - 정책 카드 내 '상세보기' 버튼 추가.
   - 푸터에 주요 정부 복지 포털 바로가기 섹션 구축.
2. **배포 설정:**
   - `firebase.json` 및 `.firebaserc` 파일 생성 및 설정.
   - Firebase Hosting 배포 준비 완료 (Ready for Deployment).

## Deployment Status
- **배포 설정 완료:** `firebase.json`, `.firebaserc` 파일이 생성되어 Firebase Hosting 배포를 위한 모든 준비가 끝났습니다.
- **인증 필요:** 현재 터미널 환경에서 Firebase CLI의 인증 세션이 필요합니다. 터미널에 `firebase login`을 실행한 후 `firebase deploy`를 입력하여 배포를 완료할 수 있습니다.

## Steps
- [x] `blueprint.md` 실무화 테마로 업데이트
- [x] `main.js` 정책 카드에 외부 링크 및 버튼 로직 추가
- [x] `index.html` 푸터에 정부 포털 링크 모음 추가
- [x] `style.css` 버튼 및 푸터 링크 스타일 최적화
- [x] `firebase.json`, `.firebaserc` 생성 및 배포 준비 완료
- [x] 배포 준비 및 상태 요약 문서화
