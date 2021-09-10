with import <nixpkgs> {};
pkgs.mkShell rec {
  name = "ng";
  shellHook = ''
    alias commit="git commit -m "
    alias add="git add "
    alias pull="git push "
    alias push="git pull "
  '';
  buildInputs = with pkgs; [
    nodejs
    yarn
    nodePackages.typescript
    nodePackages."@angular/cli"

    # Other packages
    pkgconfig
    openssl
    git
    libGL
    xorg.libxcb
    xorg.libX11
    xorg.libXcursor
    xorg.libXi
    xorg.libXrandr
    python3
    alsaLib
    freetype
    expat
  ];
}
