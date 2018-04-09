<template>
    <div class="wrapper">
        <RadioGroup v-model="phone">
            <Radio label="apple">
                <Icon type="social-apple"></Icon>
                <span>Apple</span>
            </Radio>
            <Radio label="android">
                <Icon type="social-android"></Icon>
                <span>Android</span>
            </Radio>
            <Radio label="windows">
                <Icon type="social-windows"></Icon>
                <span>Windows</span>
            </Radio>
        </RadioGroup>
        <RadioGroup v-model="animal">
            <Radio label="金斑蝶"></Radio>
            <Radio label="爪哇犀牛"></Radio>
            <Radio label="印度黑羚"></Radio>
        </RadioGroup>
    </div>
</template>
<script>
    import {RadioGroup, Radio, Icon} from 'iview'
    export default {
        data () {
            return {
                phone: 'apple',
                animal: '爪哇犀牛'
            }
        },
        comments:{
            RadioGroup,
            Radio,
            Icon

        }
    }
</script>
