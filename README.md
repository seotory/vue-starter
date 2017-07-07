# 프로젝트 시작하기

## 설치

`npm install`로 설치하지 마십시오. 아래의 명령어로 실행시켜 주세요. 이 명령어에는 2가지의 일을 포함하고 있습니다.

- npm 모듈 설치
- typescript의 d.ts 설치

```
npm run init
```

## 빌드

```
npm run build 
```

## 브라우저 테스트

```
npm run test
```

## phantomjs로 tdd 시작하기

```
npm run tdd
```

# 학습순서

원하시는데로 학습하면 되지만 아래의 순서를 추천합니다.

1. 순수 vue
2. vue 2.0  
  2-1. vue-class-component (데코레이터 패턴)  
  2-2. .vue 확장자 파일 사용법
3. typescript  
  3-1. typescript 문법  
  3-2. tsconfig.js  
  3-3. typings
4. webpack
5. javascript ECMA 6+, 7 문법
6. html 5
7. tdd를 위한 공부  
  7-1. karma  
    7-1-1. karam.config  
  7-2. mocha, sinon, chai

# [loader 선택] ts-loader와 awesome-typescript 다른 점

awesome-typescript-loader loader was created mostly to speed-up compilation in my own projects. Some of them are quite big and I wanted to have full control on how my files are compiled. There are three major points:

1. atl has first-class integration with Babel and enables caching possibilities. This can be useful for those who use Typescript with Babel. When useBabel and useCache flags are enabled, typescript's emit will be transpiled with Babel and cached. So next time if source file (+environment) has the same checksum we can totally skip typescript's and babel's transpiling. This significantly reduces build time in this scenario.

2. atl is able to fork type-checker and emitter to a separate process, which also speeds-up some development scenarios (e.g. react with react-hot-loader) So your webpack compilation will end earlier and you can explore compiled version in your browser while your files are typechecked.

[참조](https://github.com/s-panferov/awesome-typescript-loader#differences-between-ts-loader)

프로젝트에서는 `awesome-typescript-loader`를 사용한다.

# typescript options

https://www.typescriptlang.org/docs/handbook/compiler-options.html