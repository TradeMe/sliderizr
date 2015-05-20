declare module sliderizr {
    export interface IPanelRouteProvider extends ng.IServiceProvider {
        when(name: string, route: IPanelRoute): IPanelRouteProvider;
        otherwise(route: IPanelRoute): IPanelRouteProvider;
        otherwise(routeName: string): IPanelRouteProvider;
        config: ISliderizrConfig;
    }
}
