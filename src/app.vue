<template>
    <div class="wrapper">
        <div class="layout">
            <Sider :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
                <Menu  theme="dark" width="auto" >
                    <Submenu name="1">
                        <template slot="title">
                            <Icon type="ios-navigate"></Icon>
                           Basic
                        </template>
                        <router-link to="/"><MenuItem name="1-1"><Icon type="android-home"></Icon>Home</MenuItem></router-link>
                        <router-link to="test"><MenuItem name="1-2"><Icon type="coffee"></Icon>vuex</MenuItem></router-link>
                    </Submenu>
                    <Submenu name="2">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                            components
                        </template>
                        <router-link to="modalPage"> <MenuItem name="2-1">model 组件</MenuItem></router-link>
                    </Submenu>
                    <Submenu name="3">
                        <template slot="title">
                            <Icon type="ios-analytics"></Icon>
                           View
                        </template>
                        <router-link to="vueevent"> <MenuItem name="3-1">vue event</MenuItem></router-link>
                        <MenuItem name="3-2">Option 2</MenuItem>
                    </Submenu>
                    <Submenu name="4">
                        <template slot="title">
                            <Icon type="ios-photos"></Icon>
                           something
                        </template>
                        <MenuItem name="4-1">Option 1</MenuItem>
                        <MenuItem name="4-2">Option 2</MenuItem>
                    </Submenu>
                    <Submenu name="5">
                        <template slot="title">
                            <Icon type="search"></Icon>
                           Navigation
                        </template>
                        <MenuItem name="5-1">Option 1</MenuItem>
                        <MenuItem name="5-2">Option 2</MenuItem>
                    </Submenu>
                    <Submenu name="6">
                        <template slot="title">
                            <Icon type="ios-pie-outline"></Icon>
                          Chart
                        </template>
                        <MenuItem name="6-1">Option 1</MenuItem>
                        <MenuItem name="6-2">Option 2</MenuItem>
                    </Submenu>
                    <Submenu name="7">
                        <template slot="title">
                            <Icon type="ios-keypad"></Icon>
                          Others
                        </template>
                        <MenuItem name="7-1">Option 1</MenuItem>
                        <MenuItem name="7-2">Option 2</MenuItem>
                    </Submenu>
                </Menu>
            </Sider>
            <Layout :style="{marginLeft: '200px'}">
                <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}"></Header>
                <Content :style="{padding: '0 16px 16px'}">
                    <Breadcrumb :style="{margin: '16px 0'}">
                        <BreadcrumbItem><router-link to="/">Home</router-link></BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                    <Card>
                        <div :style="{minHeight:'600px'}">
                            <transition name="fade">
                                <keep-alive>
                                    <router-view></router-view>
                                </keep-alive>
                            </transition>
                        </div>
                    </Card>
                </Content>
                <Footer class="layout-footer-center">2011-2016 &copy; TalkingData</Footer>
            </Layout>
        </div>
    </div>

</template>

<script>
export default {
  name: "app"
};
</script>

<style scoped>
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}

.layout-header-bar {
  background: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
}
</style>


