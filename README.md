### gm 的使用

首先安装 GraphicsMagick 或者 ImageMagick：

```bash
brew install imagemagick
brew install graphicsmagick
```

> 如果出现了 brew install 的安装问题，解决方案如下：
>
> 首先尝试：
>
> ```bash
> sudo chown -R fintopia /usr/local
> ```
>
> 但是在高版本的 MacOS 中会报错：
>
> ```bash
> chown: /usr/local: Operation not permitted
> ```
>
> 解决方案：
>
> 先卸载已安装的 homebrew
>
> ```bash
> /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall)"
> ```
>
> 然后重新安装 homebrew
>
> ```bash
> /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
> ```
> 
> 然后再安装 GraphicsMagick 或者 ImageMagick

ImageMagick 支持 WebP：

```bash
brew install imagemagick --with-webp
```

然后就可以在项目中安装 gm：

```js
npm i gm -S
```

如果安装的是 ImageMagick，在使用 `gm` 的时候需要将这个配置打开：

```js
gm().options({ imageMagick: true })
```

