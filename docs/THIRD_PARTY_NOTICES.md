# Third-party notices

RideLink is a separate project, not an official Fairground Online product or a FairgroundAPI release.

- **FairgroundAPI**, Luca Rab, MIT: https://github.com/lucarab/FairgroundAPI
  Reviewed commit `b860276bbc58a90dc7368597e82b9a28ec7d0d75`.
  `GameWatcher.Describe` adapts the ride-root traversal from `ControlPanelScanner.FindRideRoot`.
  The ownership setter hook, `Current_Player.Is_Me` check, and main-thread separation follow its approach.
  `MegaDanceInventory.Root` also adapts its ride-root traversal. `RecordedControlWriter`
  adapts the typed control-record discovery/application in `MethodResolver`, adding full-shape
  and unique-method validation. Material color-name interpretation follows `MaterialHelper`;
  RideLink additionally reads native emission to preserve actual lamp phase.
  Turaka native UI callback bindings also follow its interaction-manager approach, with exact hierarchy/type and option validation. Its full license is in `licenses/FairgroundAPI.txt`.
- **EmbedIO 3.5.2**, Unosquare and contributors, MIT: https://github.com/unosquare/embedio
  Included binary `EmbedIO.dll`. Full upstream notice, including component notices, in `licenses/EmbedIO.txt`.
- **Unosquare.Swan.Lite 3.1.0**, Unosquare and contributors, MIT: https://github.com/unosquare/swan
  Included binary `Swan.Lite.dll`. License in `licenses/Swan.txt`.
- **Figtree**, Erik Kennedy and contributors, SIL Open Font License 1.1:
  https://github.com/google/fonts/tree/main/ofl/figtree
  Self-hosted variable font `Web/assets/Figtree.ttf`; license in `licenses/Figtree-OFL.txt`.

The horizontal and square RideLink logo PNGs are supplied by the project owner and are used unchanged. Operator panel drawings are original CSS/SVG/HTML reconstructions of the supplied game screenshots; screenshot pixels and game textures are not embedded or redistributed.

BepInEx, Harmony, Il2CppInterop, Unity and generated game assemblies are external installation/build dependencies and are **not** bundled in the RideLink package. Game binaries and generated interop assemblies must not be committed or redistributed with this project.

