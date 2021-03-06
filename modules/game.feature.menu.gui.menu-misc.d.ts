import './impact.feature.gui.gui';
import './impact.feature.gui.base.basic-gui';
import './impact.feature.interact.gui.focus-gui';
import './impact.feature.gui.base.box';
import './game.feature.gui.base.button';
import './game.feature.combat.stat-change';

export {};

declare global {
  namespace sc {
    var MODIFIER_ICON_DRAW: {
      X: number;
      Y: number;
      SIZE: number;
      MAX_PER_ROW: number;
    };

    interface BuffInfo extends ig.GuiElementBase {
      _width: number;

      setText(this: this, text: sc.TextLike, initDelay: number): void;
    }
    interface BuffInfoConstructor extends ImpactClass<BuffInfo> {
      new (): BuffInfo;
    }
    var BuffInfo: BuffInfoConstructor;

    interface InfoBar extends ig.GuiElementBase {
      text: sc.TextGui;
      sizeTransition: {
        startWidth: number;
        width: number;
        startHeight: number;
        height: number;
        time: number;
        timeFunction: KeySpline;
        timer: number;
      };

      doSizeTransition(
        this: this,
        width: number,
        height: number,
        time: number,
        timeFunction: KeySpline,
        delay: number,
      ): void;
    }
    interface InfoBarConstructor extends ImpactClass<InfoBar> {
      new (width: number, height: number, skipRender: boolean): InfoBar;
    }
    var InfoBar: InfoBarConstructor;

    interface ListBoxButton extends ig.FocusGui {
      button: sc.ButtonGui;
      data: { id: string | number; description: string };
      _width: number;

      setButtonText(this: this, text: sc.TextLike): void;
      setWidth(this: this, buttonWidth?: number, lineWidth?: number): void;
      setText(this: this, text: sc.TextLike): void;
    }
    interface ListBoxButtonConstructor extends ImpactClass<ListBoxButton> {
      new (
        text: sc.TextLike,
        buttonWidth: number,
        lineWidth: number,
        id?: string | number,
        description?: string,
        noLine?: boolean,
        alignCenter?: boolean,
        sound?: ig.Sound,
      ): ListBoxButton;
    }
    var ListBoxButton: ListBoxButtonConstructor;

    interface ItemBoxButton extends sc.ListBoxButton {}
    interface ItemBoxButtonConstructor extends ImpactClass<ItemBoxButton> {}
    var ItemBoxButton: ItemBoxButtonConstructor;

    interface SimpleStatusDisplay extends ig.GuiElementBase {
      gfx: ig.Image;
      lineID: number;
      iconIndex: Vec2;
      currentValueGui: sc.NumberGui;
      arrowGui: ig.ImageGui;
      percentCurrentGui: sc.PercentChar;
      simpleMode: boolean;
      noPercentMode: boolean;
    }
    interface SimpleStatusDisplayConstructor extends ImpactClass<SimpleStatusDisplay> {
      new (
        name: string,
        lineID: number,
        iconID: number,
        usePercent: boolean,
        maxValue: number,
        simpleMode: boolean,
        width: number,
        noPercentMode: boolean,
      ): SimpleStatusDisplay;
    }
    var SimpleStatusDisplay: SimpleStatusDisplayConstructor;

    interface PercentChar extends ig.GuiElementBase {}
    interface PercentCharConstructor extends ImpactClass<PercentChar> {}
    var PercentChar: PercentCharConstructor;

    interface MenuPanel extends ig.BoxGui {}
    interface MenuPanelConstructor extends ImpactClass<MenuPanel> {}
    var MenuPanel: MenuPanelConstructor;

    interface HeaderMenuPanel extends sc.MenuPanel {}
    interface HeaderMenuPanelConstructor extends ImpactClass<HeaderMenuPanel> {}
    var HeaderMenuPanel: HeaderMenuPanelConstructor;

    interface MenuScanLines extends ig.GuiElementBase {}
    interface MenuScanLinesConstructor extends ImpactClass<MenuScanLines> {}
    var MenuScanLines: MenuScanLinesConstructor;

    interface ScrollPane extends ig.GuiElementBase {}
    interface ScrollPaneConstructor extends ImpactClass<ScrollPane> {}
    var ScrollPane: ScrollPaneConstructor;

    interface TimeAndMoneyGUI extends sc.MenuPanel {
      gfx: ig.Image;
      timeGfx: ig.Image;
      credit: sc.NumberGui;
      timeSec: sc.NumberGui;
      timeMin: sc.NumberGui;
      timeHour: sc.NumberGui;
    }
    interface TimeAndMoneyGUIConstructor extends ImpactClass<TimeAndMoneyGUI> {
      new (): TimeAndMoneyGUI;
    }
    var TimeAndMoneyGUI: TimeAndMoneyGUIConstructor;
  }
}
