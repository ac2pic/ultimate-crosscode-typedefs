import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './game.feature.gui.base.text';
import './game.feature.menu.gui.menu-misc';
import './game.feature.menu.gui.list-boxes';
import './game.feature.menu.gui.tab-box';
import './game.feature.menu.gui.lore.lore-misc';

export {};

declare global {
  namespace sc {
    interface LoreListBoxNew extends sc.ListTabbedPane {}
    interface LoreListBoxNewConstructor extends ImpactClass<LoreListBoxNew> {}
    var LoreListBoxNew: LoreListBoxNewConstructor;
  }
}
