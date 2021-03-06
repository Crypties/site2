export const MaterialTailwindTheme: React.Context<{
    accordion: import("../theme/components/accordion").AccordionStylesType;
    alert: import("../theme/components/alert").AlertStylesType;
    avatar: import("../theme/components/avatar").AvatarStyleTypes;
    breadcrumbs: import("../theme/components/breadcrumbs").BreadcrumbsStyleTypes;
    button: import("../theme/components/button").ButtonStyleTypes;
    card: import("../theme/components/card").CardStylesType;
    cardBody: import("../theme/components/card/cardBody").CardBodyStylesType;
    cardFooter: import("../theme/components/card/cardFooter").CardFooterStylesType;
    cardHeader: import("../theme/components/card/cardHeader").CardHeaderStylesType;
    checkbox: import("../theme/components/checkbox").CheckboxStylesType;
    chip: import("../theme/components/chip").ChipStylesType;
    dialog: import("../theme/components/dialog").DialogStylesType;
    dialogBody: import("../theme/components/dialog/dialogBody").DialogBodyStylesType;
    dialogFooter: import("../theme/components/dialog/dialogFooter").DialogFooterStylesType;
    dialogHeader: import("../theme/components/dialog/dialogHeader").DialogHeaderStylesType;
    iconButton: import("../theme/components/iconButton").IconButtonStyleTypes;
    input: import("../theme/components/input").InputStylesType;
    menu: import("../theme/components/menu").MenuStylesType;
    navbar: import("../theme/components/navbar").NavbarStylesType;
    popover: import("../theme/components/popover").PopoverStylesType;
    progress: import("../theme/components/progress").ProgressStylesType;
    radio: import("../theme/components/radio").RadioStylesType;
    select: import("../theme/components/select").SelectStylesType;
    switch: import("../theme/components/switch").SwitchButtonStylesType;
    tab: import("../theme/components/tabs/tab").TabStylesType;
    tabs: import("../theme/components/tabs").TabsStylesType;
    tabsBody: import("../theme/components/tabs/tabsBody").TabsBodyStylesType;
    tabsHeader: import("../theme/components/tabs/tabsHeader").TabsHeaderStylesType;
    tabPanel: import("../theme/components/tabs/tabPanel").TabPanelStylesType;
    textarea: import("../theme/components/textarea").TextareaStylesType;
    tooltip: import("../theme/components/tooltip").TooltipStylesType;
    typography: import("../theme/components/typography").TypographyStylesType;
}>;
export function ThemeProvider({ value, children }: {
    value: any;
    children: any;
}): JSX.Element;
export namespace ThemeProvider {
    namespace defaultProps {
        export { theme as value };
    }
    namespace propTypes {
        const value: PropTypes.Requireable<Object>;
        const children: PropTypes.Validator<PropTypes.ReactNodeLike>;
    }
}
export function useTheme(): {
    accordion: import("../theme/components/accordion").AccordionStylesType;
    alert: import("../theme/components/alert").AlertStylesType;
    avatar: import("../theme/components/avatar").AvatarStyleTypes;
    breadcrumbs: import("../theme/components/breadcrumbs").BreadcrumbsStyleTypes;
    button: import("../theme/components/button").ButtonStyleTypes;
    card: import("../theme/components/card").CardStylesType;
    cardBody: import("../theme/components/card/cardBody").CardBodyStylesType;
    cardFooter: import("../theme/components/card/cardFooter").CardFooterStylesType;
    cardHeader: import("../theme/components/card/cardHeader").CardHeaderStylesType;
    checkbox: import("../theme/components/checkbox").CheckboxStylesType;
    chip: import("../theme/components/chip").ChipStylesType;
    dialog: import("../theme/components/dialog").DialogStylesType;
    dialogBody: import("../theme/components/dialog/dialogBody").DialogBodyStylesType;
    dialogFooter: import("../theme/components/dialog/dialogFooter").DialogFooterStylesType;
    dialogHeader: import("../theme/components/dialog/dialogHeader").DialogHeaderStylesType;
    iconButton: import("../theme/components/iconButton").IconButtonStyleTypes;
    input: import("../theme/components/input").InputStylesType;
    menu: import("../theme/components/menu").MenuStylesType;
    navbar: import("../theme/components/navbar").NavbarStylesType;
    popover: import("../theme/components/popover").PopoverStylesType;
    progress: import("../theme/components/progress").ProgressStylesType;
    radio: import("../theme/components/radio").RadioStylesType;
    select: import("../theme/components/select").SelectStylesType;
    switch: import("../theme/components/switch").SwitchButtonStylesType;
    tab: import("../theme/components/tabs/tab").TabStylesType;
    tabs: import("../theme/components/tabs").TabsStylesType;
    tabsBody: import("../theme/components/tabs/tabsBody").TabsBodyStylesType;
    tabsHeader: import("../theme/components/tabs/tabsHeader").TabsHeaderStylesType;
    tabPanel: import("../theme/components/tabs/tabPanel").TabPanelStylesType;
    textarea: import("../theme/components/textarea").TextareaStylesType;
    tooltip: import("../theme/components/tooltip").TooltipStylesType;
    typography: import("../theme/components/typography").TypographyStylesType;
};
import React from "react";
import theme from "../theme/index";
import PropTypes from "prop-types";
//# sourceMappingURL=theme.d.ts.map